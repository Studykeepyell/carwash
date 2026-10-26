// Business inbox for booking requests and partner enquiries, e.g. "info@yourdomain.ca".
// While this is empty the site shows "Call to book" instead of the email form.
const BOOKING_EMAIL = "";

document.getElementById("year").textContent = new Date().getFullYear();

if (BOOKING_EMAIL) {
  document.querySelectorAll("[data-needs-email]").forEach((el) => { el.hidden = false; });
  document.querySelectorAll("[data-no-email]").forEach((el) => { el.hidden = true; });
  document.querySelectorAll("[data-email-link]").forEach((link) => {
    const subject = link.dataset.subject ? `?subject=${encodeURIComponent(link.dataset.subject)}` : "";
    link.href = `mailto:${BOOKING_EMAIL}${subject}`;
    if ("emailText" in link.dataset) link.textContent = BOOKING_EMAIL;
  });
}

// "Book Essential" / "Book Premium" / "Get a quote" buttons pre-select the package.
const packageSelect = document.getElementById("package");
document.querySelectorAll("[data-package]").forEach((link) => {
  link.addEventListener("click", () => {
    packageSelect.value = link.dataset.package;
  });
});

// No server needed: the form opens the visitor's email app with the request filled in.
const form = document.getElementById("booking-form");
const errorBox = document.getElementById("form-error");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = (data.get("name") || "").trim();
  const phone = (data.get("phone") || "").trim();

  if (!name || !phone) {
    errorBox.hidden = false;
    form.querySelector(name ? "[name=phone]" : "[name=name]").focus();
    return;
  }
  errorBox.hidden = true;

  const lines = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Package: ${data.get("package")}`,
    `Vehicle: ${data.get("vehicle")}`,
    `Make and model: ${data.get("model") || "-"}`,
    `Preferred date: ${data.get("date") || "Flexible"}`,
    "",
    `Notes: ${data.get("notes") || "-"}`,
  ];
  const subject = `Detailing request: ${data.get("package")} - ${name}`;
  window.location.href =
    `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
});
