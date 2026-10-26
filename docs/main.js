// Where booking requests are sent. Change this to the business inbox.
const BOOKING_EMAIL = "info@example.com";

document.getElementById("year").textContent = new Date().getFullYear();

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
