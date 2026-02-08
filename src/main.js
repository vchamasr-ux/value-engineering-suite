document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Form handling
  const form = document.getElementById('lead-form');
  const statusMessage = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerText;
      
      // Disable button and show loading state
      submitBtn.disabled = true;
      submitBtn.innerText = 'Sending...';
      statusMessage.innerText = '';
      statusMessage.className = 'form-status';

      // Gather form data
      const formData = new FormData(form);
      const data = {
        email: formData.get('email'),
        intent: formData.get('intent'),
        module_interest: formData.getAll('module_interest'),
        source_cta: formData.get('source_cta'),
        referrer: document.referrer || 'direct',
        url: window.location.href,
        timestamp: new Date().toISOString()
      };

      try {
        const response = await fetch('/api/leads', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
          statusMessage.innerText = 'Thank you! We will be in touch shortly.';
          statusMessage.classList.add('status-success');
          form.reset();
        } else {
          throw new Error(result.error || 'Something went wrong');
        }
      } catch (error) {
        console.error('Form submission error:', error);
        statusMessage.innerText = 'Error submitting form. Please try again.';
        statusMessage.classList.add('status-error');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = originalBtnText;
      }
    });
  }

  // Analytics tracking helper (console log for now, replace with analytics provider later)
  document.querySelectorAll('[data-analytics]').forEach(el => {
    el.addEventListener('click', (e) => {
      const eventName = el.getAttribute('data-analytics');
      console.log('Analytics Event:', eventName, {
        url: el.href,
        timestamp: new Date().toISOString()
      });
      // TODO: Integrate with actual analytics provider (e.g. PostHog, GA4)
    });
  });
});
