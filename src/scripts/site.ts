function initMobileDrawer(): () => void {
  const menuToggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const mobileDrawer = document.querySelector<HTMLElement>('[data-mobile-drawer]');

  if (!menuToggle || !mobileDrawer) return () => {};

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

  const onResize = () => {
    if (window.matchMedia('(min-width: 960px)').matches && !mobileDrawer.hidden) {
      closeDrawer();
    }
  };

  menuToggle.addEventListener('click', toggleDrawer);
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('resize', onResize, { passive: true });

  const mobileLinks = mobileDrawer.querySelectorAll<HTMLAnchorElement>('[data-mobile-link]');
  mobileLinks.forEach((link) => link.addEventListener('click', closeDrawer));

  return () => {
    menuToggle.removeEventListener('click', toggleDrawer);
    window.removeEventListener('keydown', onKeyDown);
    window.removeEventListener('resize', onResize);
    mobileLinks.forEach((link) => link.removeEventListener('click', closeDrawer));
  };
}

function initDemoForms(): () => void {
  const forms = document.querySelectorAll<HTMLFormElement>('[data-demo-form]');
  if (!forms.length) return () => {};

  const cleanups: Array<() => void> = [];
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Pre-select service from ?servicio= query param when present
  const params = new URLSearchParams(window.location.search);
  const preselectedService = params.get('servicio');

  forms.forEach((form) => {
    const status = form.querySelector<HTMLElement>('[data-demo-status]');
    const serviceSelect = form.querySelector<HTMLSelectElement>('select[name="area"], select[name="servicio"]');

    if (preselectedService && serviceSelect) {
      const hasOption = Array.from(serviceSelect.options).some((opt) => opt.value === preselectedService);
      if (hasOption) {
        serviceSelect.value = preselectedService;
      }
    }

    const clearFieldError = (field: HTMLInputElement | HTMLTextAreaElement) => {
      field.removeAttribute('aria-invalid');
      const errorEl = form.querySelector<HTMLElement>(`[data-field-error="${field.id}"]`);
      if (errorEl) {
        errorEl.textContent = '';
        errorEl.hidden = true;
      }
    };

    const setFieldError = (field: HTMLInputElement | HTMLTextAreaElement, message: string) => {
      field.setAttribute('aria-invalid', 'true');
      const errorEl = form.querySelector<HTMLElement>(`[data-field-error="${field.id}"]`);
      if (errorEl) {
        errorEl.textContent = message;
        errorEl.hidden = false;
      }
    };

    const requiredInputs = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
      'input[required], textarea[required]'
    );

    const onInput = (event: Event) => {
      const target = event.target as HTMLInputElement | HTMLTextAreaElement;
      if (target && target.getAttribute('aria-invalid') === 'true') {
        clearFieldError(target);
      }
    };

    requiredInputs.forEach((input) => input.addEventListener('input', onInput));

    const onSubmit = (event: SubmitEvent) => {
      event.preventDefault();

      let firstInvalid: HTMLInputElement | HTMLTextAreaElement | null = null;
      const missingFields: string[] = [];

      requiredInputs.forEach((input) => {
        clearFieldError(input);
        const value = input.value.trim();

        if (!value) {
          setFieldError(input, 'Este campo es obligatorio.');
          missingFields.push(input.name);
          if (!firstInvalid) firstInvalid = input;
          return;
        }

        if (input.type === 'email' && !emailPattern.test(value)) {
          setFieldError(input, 'Introduce un correo electrónico válido.');
          missingFields.push(input.name);
          if (!firstInvalid) firstInvalid = input;
        }
      });

      if (status) {
        status.hidden = false;
        if (firstInvalid) {
          status.dataset.state = 'error';
          status.textContent =
            'Revisa los campos marcados antes de continuar. Los datos introducidos no se envían en esta versión de demostración.';
          (firstInvalid as HTMLInputElement | HTMLTextAreaElement).focus();
          return;
        }

        status.dataset.state = 'demo';
        status.textContent =
          'Validación completada en modo demostración: este formulario está preparado para conectarse a un envío real en producción, pero no transmite ni almacena datos actualmente.';
      }
    };

    form.addEventListener('submit', onSubmit);

    cleanups.push(() => {
      form.removeEventListener('submit', onSubmit);
      requiredInputs.forEach((input) => input.removeEventListener('input', onInput));
    });
  });

  return () => cleanups.forEach((fn) => fn());
}

export function mountSite(): void {
  const cleanupDrawer = initMobileDrawer();
  const cleanupForms = initDemoForms();

  const teardown = () => {
    cleanupForms();
    cleanupDrawer();
  };

  window.addEventListener('pagehide', teardown, { once: true });
}
