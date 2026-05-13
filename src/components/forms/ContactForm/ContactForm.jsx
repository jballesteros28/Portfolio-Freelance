import React from "react";
import { Send } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import Button from "../../common/Button";
import { contactFormContent } from "../../../data/siteContent";
import "./ContactForm.css";

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || "TU_ID_DE_FORMSPREE";
const isFormspreeConfigured = FORMSPREE_ID !== "TU_ID_DE_FORMSPREE";

function ContactForm({
  title = contactFormContent.title,
  subtitle = contactFormContent.subtitle,
  compact = false,
  layout = "stacked",
}) {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);
  const className = ["contact-form", compact ? "contact-form--compact" : "", `contact-form--${layout}`]
    .filter(Boolean)
    .join(" ");

  return (
    <form className={className} onSubmit={handleSubmit} aria-busy={state.submitting}>
      {(title || subtitle) && (
        <div className="contact-form__header">
          {title ? <h3>{title}</h3> : null}
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
      )}

      <div className="contact-form__grid">
        <label className="contact-form__field">
          <span>{contactFormContent.fields.name.label}</span>
          <input
            type="text"
            name="nombre"
            autoComplete="name"
            placeholder={contactFormContent.fields.name.placeholder}
            required
            disabled={state.submitting}
          />
          <ValidationError prefix={contactFormContent.fields.name.label} field="nombre" errors={state.errors} />
        </label>

        <label className="contact-form__field">
          <span>{contactFormContent.fields.email.label}</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder={contactFormContent.fields.email.placeholder}
            required
            disabled={state.submitting}
          />
          <ValidationError prefix={contactFormContent.fields.email.label} field="email" errors={state.errors} />
        </label>

        <label className="contact-form__field contact-form__field--full">
          <span>{contactFormContent.fields.message.label}</span>
          <textarea
            name="mensaje"
            rows={compact ? 4 : 6}
            placeholder={contactFormContent.fields.message.placeholder}
            required
            disabled={state.submitting}
          />
          <ValidationError prefix={contactFormContent.fields.message.label} field="mensaje" errors={state.errors} />
        </label>
      </div>

      <Button
        className="button--full contact-form__submit"
        type="submit"
        variant="primary"
        icon={Send}
        disabled={state.submitting || state.succeeded || !isFormspreeConfigured}
      >
        {state.submitting
          ? contactFormContent.submitting
          : state.succeeded
            ? contactFormContent.submitted
            : contactFormContent.submit}
      </Button>

      {state.succeeded ? (
        <p className="contact-form__status contact-form__status--success">
          {contactFormContent.success}
        </p>
      ) : null}

      {!isFormspreeConfigured ? (
        <p className="contact-form__status contact-form__status--error">
          Configurá el ID de Formspree en VITE_FORMSPREE_ID para activar el formulario.
        </p>
      ) : null}

      {state.errors?.length > 0 ? (
        <p className="contact-form__status contact-form__status--error">
          {contactFormContent.error}
        </p>
      ) : null}
    </form>
  );
}

export default ContactForm;
