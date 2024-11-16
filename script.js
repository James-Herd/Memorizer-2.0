window.addEventListener("load", () => {
  const currentYear = new Date().getFullYear();
  const copyrightDateElement = document.getElementById("copyright-date");
  copyrightDateElement.innerText = currentYear;
});
