import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SCENE_LIST } from '../data/scenes';

gsap.registerPlugin(ScrollTrigger);

const SCENE_IDS = SCENE_LIST.map((s) => s.id);

function initInteractions(): () => void {
  const cleanups: Array<() => void> = [];

  // 1. Mobile navigation drawer
  const menuToggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const mobileDrawer = document.querySelector<HTMLElement>('[data-mobile-drawer]');

  if (menuToggle && mobileDrawer) {
    const closeDrawer = () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
      mobileDrawer.hidden = true;
    };

    const toggleDrawer = () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeDrawer();
      } else {
        menuToggle.setAttribute('aria-expanded', 'true');
        menuToggle.setAttribute('aria-label', 'Cerrar menú de navegación');
        mobileDrawer.hidden = false;
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !mobileDrawer.hidden) {
        closeDrawer();
        menuToggle.focus();
      }
    };

    menuToggle.addEventListener('click', toggleDrawer);
    window.addEventListener('keydown', onKeyDown);

    const mobileLinks = mobileDrawer.querySelectorAll<HTMLAnchorElement>('[data-mobile-link]');
    mobileLinks.forEach((link) => link.addEventListener('click', closeDrawer));

    cleanups.push(() => {
      menuToggle.removeEventListener('click', toggleDrawer);
      window.removeEventListener('keydown', onKeyDown);
      mobileLinks.forEach((link) => link.removeEventListener('click', closeDrawer));
    });
  }

  // 2. Inline fiscal breakdown toggle (refreshes ScrollTrigger cleanly)
  const detailButtons = document.querySelectorAll<HTMLButtonElement>('[data-toggle-detail]');
  detailButtons.forEach((btn) => {
    const targetId = btn.dataset.toggleDetail;
    const panel = targetId ? document.getElementById(targetId) : null;
    if (!panel) return;

    const onToggle = () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!isExpanded));
      panel.hidden = isExpanded;
      requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    btn.addEventListener('click', onToggle);
    cleanups.push(() => btn.removeEventListener('click', onToggle));
  });

  // 3. Consultation CTA gently focuses first field after scroll
  const focusConsulta = document.querySelector<HTMLAnchorElement>('[data-focus-consulta]');
  const nameInput = document.getElementById('consulta-nombre') as HTMLInputElement | null;
  if (focusConsulta && nameInput) {
    const onFocusJump = () => {
      window.setTimeout(() => nameInput.focus({ preventScroll: true }), 450);
    };
    focusConsulta.addEventListener('click', onFocusJump);
    cleanups.push(() => focusConsulta.removeEventListener('click', onFocusJump));
  }

  // 4. Conceptual demo form — honest feedback, never simulates a confirmed booking
  const demoForm = document.querySelector<HTMLFormElement>('[data-demo-form]');
  const demoStatus = document.querySelector<HTMLElement>('[data-demo-status]');
  if (demoForm && demoStatus) {
    const onSubmit = (event: SubmitEvent) => {
      event.preventDefault();
      const formData = new FormData(demoForm);
      const nombre = String(formData.get('nombre') ?? '').trim();
      const correo = String(formData.get('correo') ?? '').trim();
      const mensaje = String(formData.get('mensaje') ?? '').trim();

      demoStatus.hidden = false;

      if (!nombre || !correo || !mensaje) {
        demoStatus.textContent =
          'Completa tu nombre, correo electrónico y mensaje para comprobar la validación del formulario conceptual.';
        return;
      }

      demoStatus.textContent =
        'Modo demostración: los campos se han validado correctamente, pero este formulario conceptual no envía datos ni registra consultas todavía.';
    };

    demoForm.addEventListener('submit', onSubmit);
    cleanups.push(() => demoForm.removeEventListener('submit', onSubmit));
  }

  return () => cleanups.forEach((fn) => fn());
}

function initActiveSceneTracking(): () => void {
  const header = document.querySelector<HTMLElement>('[data-site-header]');
  const progress = document.querySelector<HTMLElement>('[data-tour-progress]');
  const railFill = document.querySelector<HTMLElement>('[data-tour-rail-fill]');
  const scrim = document.querySelector<HTMLElement>('[data-stage-scrim]');
  const hudCode = document.querySelector<HTMLElement>('[data-stage-code]');
  const hudRoom = document.querySelector<HTMLElement>('[data-stage-room]');
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('[data-nav-target]');
  const progressLinks = document.querySelectorAll<HTMLAnchorElement>('[data-progress-target]');
  const scenes = document.querySelectorAll<HTMLElement>('[data-scene]');
  const consultaBand = document.querySelector<HTMLElement>('[data-surface-band]');

  const isDesktop = () => window.matchMedia('(min-width: 1024px)').matches;

  const setActiveScene = (sceneId: string, scrimMode: string) => {
    const spec = SCENE_LIST.find((s) => s.id === sceneId) ?? SCENE_LIST[0];
    const headerSurface = isDesktop()
      ? 'dark'
      : sceneId === 'entrada'
        ? 'dark'
        : sceneId === 'contable' || sceneId === 'nosotros'
          ? 'ivory'
          : 'light';

    if (header) header.dataset.surface = headerSurface;
    if (progress) progress.dataset.surface = 'dark';
    if (scrim) scrim.dataset.stageScrim = scrimMode;
    if (hudCode) hudCode.textContent = spec.code;
    if (hudRoom) hudRoom.textContent = spec.roomLabel;

    navLinks.forEach((link) => {
      if (link.dataset.navTarget === sceneId) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    progressLinks.forEach((link) => {
      const isActive = link.dataset.progressTarget === sceneId;
      link.classList.toggle('is-active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    if (railFill) {
      const idx = SCENE_IDS.indexOf(sceneId as (typeof SCENE_IDS)[number]);
      const ratio = idx >= 0 ? (idx + 1) / SCENE_IDS.length : 1 / SCENE_IDS.length;
      railFill.style.transform = `scaleY(${ratio.toFixed(3)})`;
    }
  };

  const triggers: ScrollTrigger[] = [];

  scenes.forEach((scene) => {
    const id = scene.dataset.scene ?? 'entrada';
    const scrimMode = scene.dataset.scrim ?? 'left';

    triggers.push(
      ScrollTrigger.create({
        trigger: scene,
        start: 'top 48%',
        end: 'bottom 48%',
        onEnter: () => setActiveScene(id, scrimMode),
        onEnterBack: () => setActiveScene(id, scrimMode),
      })
    );
  });

  if (consultaBand) {
    triggers.push(
      ScrollTrigger.create({
        trigger: consultaBand,
        start: 'top 15%',
        end: 'bottom bottom',
        onEnter: () => {
          if (header) header.dataset.surface = 'ivory';
          if (progress) progress.dataset.surface = 'light';
        },
        onLeaveBack: () => {
          setActiveScene('contacto', 'left');
        },
      })
    );
  }

  return () => triggers.forEach((t) => t.kill());
}

function initScrollChoreography(): () => void {
  const mm = gsap.matchMedia();

  // Desktop (>=1024px): continuous architectural camera stage + crossfades + directional pans
  mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
    // 1. Hero copy soft lift & fade as visitor steps inside
    const heroScene = document.querySelector<HTMLElement>('[data-scene="entrada"]');
    const heroCopy = heroScene?.querySelector<HTMLElement>('[data-hero-copy]');
    if (heroScene && heroCopy) {
      gsap.to(heroCopy, {
        opacity: 0.12,
        y: -36,
        ease: 'none',
        scrollTrigger: {
          trigger: heroScene,
          start: 'top top',
          end: 'bottom 30%',
          scrub: 0.5,
        },
      });
    }

    // 2. Continuous architectural camera motion & crossfades across all 6 rooms
    SCENE_LIST.forEach((spec, index) => {
      const section = document.querySelector<HTMLElement>(`[data-scene="${spec.id}"]`);
      const layer = document.querySelector<HTMLElement>(`[data-stage-layer="${spec.id}"]`);
      const img = document.querySelector<HTMLElement>(`[data-stage-img="${spec.id}"]`);
      if (!section || !layer || !img) return;

      // Crossfade this architectural room in smoothly as its section approaches
      if (index > 0) {
        gsap.fromTo(
          layer,
          { opacity: 0 },
          {
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top 82%',
              end: 'top 24%',
              scrub: 0.55,
            },
          }
        );
      }

      // Discreet directional camera movement (pure GPU transform: scale + pan)
      gsap.fromTo(
        img,
        {
          scale: spec.cameraFrom.scale,
          xPercent: spec.cameraFrom.xPercent,
          yPercent: spec.cameraFrom.yPercent,
        },
        {
          scale: spec.cameraTo.scale,
          xPercent: spec.cameraTo.xPercent,
          yPercent: spec.cameraTo.yPercent,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: index === 0 ? 'top top' : 'top bottom',
            end: 'bottom top',
            scrub: 0.65,
          },
        }
      );

      // Independent editorial content arrival & departure
      const copyPlate = section.querySelector<HTMLElement>('[data-scene-copy]');
      if (copyPlate) {
        gsap.fromTo(
          copyPlate,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: copyPlate,
              start: 'top 84%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
  });

  // Mobile & Tablet (<1024px): vertical architectural tour with 4:5 photos, zero pinning
  mm.add('(max-width: 1023px) and (prefers-reduced-motion: no-preference)', () => {
    const mediaBlocks = document.querySelectorAll<HTMLElement>('[data-scene-media] .scene-visual__img');
    mediaBlocks.forEach((img) => {
      gsap.fromTo(
        img,
        { scale: 1.05 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
          },
        }
      );
    });

    const copyBlocks = document.querySelectorAll<HTMLElement>('[data-scene-copy]');
    copyBlocks.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
        }
      );
    });
  });

  return () => mm.revert();
}

export function mountTour(): void {
  const cleanupInteractions = initInteractions();
  const cleanupTracking = initActiveSceneTracking();
  const cleanupMotion = initScrollChoreography();

  const onResize = () => ScrollTrigger.refresh();
  window.addEventListener('resize', onResize, { passive: true });

  const teardown = () => {
    window.removeEventListener('resize', onResize);
    cleanupMotion();
    cleanupTracking();
    cleanupInteractions();
  };

  window.addEventListener('pagehide', teardown, { once: true });
}
