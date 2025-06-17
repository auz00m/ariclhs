document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("userEmail").value;
  const message = document.getElementById("userMessage").value;

  const subject = encodeURIComponent("Message from Website Visitor");
  const body = encodeURIComponent(`Email: ${email}\n\nMessage:\n${message}`);

  window.location.href = `mailto:ariclhanghal65@gmail.com?subject=${subject}&body=${body}`;
});
