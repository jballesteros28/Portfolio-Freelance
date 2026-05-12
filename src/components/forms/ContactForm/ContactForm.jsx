import React from "react";
import { Send } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import Button from "../../common/Button";
import "./ContactForm.css";

const FORMSPREE_ID = "TU_ID_DE_FORMSPREE";

function ContactForm({
  title = "Contame que necesitas construir",
  subtitle = "Respondere con una propuesta clara para avanzar sin vueltas.",
  compact = false,
  layout = "stacked",
}) {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);
  const className = ["contact-form", compact ? "contact-form--compact" : "", `contact-form--${layout}`]
    .filter(Boolean)
    .join(" ");

  return (
    <form className={className} onSubmit={handleSubmit}>
      {(title || subtitle) && (
        <div className="contact-form__header">
          {title ? <h3>{title}</h3> : null}
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
      )}

      <div className="contact-form__grid">
        <label className="contact-form__field">
          <span>Nombre</span>
          <input type="text" name="nombre" placeholder="Tu nombre" required disabled={state.submitting} />
          <ValidationError prefix="Nombre" field="nombre" errors={state.errors} />
        </label>

        <label className="contact-form__field">
          <span>Email</span>
          <input type="email" name="email" placeholder="tu@email.com" required disabled={state.submitting} />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </label>

        <label className="contact-form__field contact-form__field--full">
          <span>Mensaje</span>
          <textarea
            name="mensaje"
            rows={compact ? 4 : 6}
            placeholder="Contame brevemente sobre tu proyecto"
            required
            disabled={state.submitting}
          />
          <ValidationError prefix="Mensaje" field="mensaje" errors={state.errors} />
        </label>
      </div>

      <Button
        className="button--full"
        type="submit"
        variant="primary"
        icon={Send}
        disabled={state.submitting || state.succeeded}
      >
        {state.submitting ? "Enviando..." : state.succeeded ? "Mensaje enviado" : "Enviar mensaje"}
      </Button>

      {state.succeeded ? (
        <p className="contact-form__status contact-form__status--success">
          Gracias, recibi tu mensaje. Te respondo lo antes posible.
        </p>
      ) : null}

      {state.errors?.length > 0 ? (
        <p className="contact-form__status contact-form__status--error">
          No se pudo enviar el mensaje. Revisa los campos o el ID de Formspree.
        </p>
      ) : null}
    </form>
  );
}

export default ContactForm;
