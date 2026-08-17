const year = document.querySelector("#year");
const copyButton = document.querySelector("#copy-sha");
const shaValue = document.querySelector("#sha-value");

if (year) {
  year.textContent = new Intl.DateTimeFormat("ar-SA-u-nu-latn", {
    year: "numeric",
  }).format(new Date());
}

copyButton?.addEventListener("click", async () => {
  const hash = shaValue?.textContent?.trim();
  if (!hash) return;

  try {
    await navigator.clipboard.writeText(hash);
    copyButton.textContent = "تم النسخ";
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(shaValue);
    selection.removeAllRanges();
    selection.addRange(range);
    copyButton.textContent = "تم التحديد";
  }

  window.setTimeout(() => {
    copyButton.textContent = "نسخ البصمة";
  }, 1800);
});
