import React from "react";
import "./Button.css";

function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  className = "",
  ...props
}) {
  const classes = ["button", `button--${variant}`, `button--${size}`, className]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {Icon && iconPosition === "left" ? <Icon aria-hidden="true" size={18} /> : null}
      <span>{children}</span>
      {Icon && iconPosition === "right" ? <Icon aria-hidden="true" size={18} /> : null}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http");

    return (
      <a
        className={classes}
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {content}
    </button>
  );
}

export default Button;
