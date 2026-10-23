/* Open an email draft with the form contents. encodeURIComponent handles spaces and punctuation in the link. The visitor still sends the email from their email app. */
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('sender-name').value.trim();
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value.trim();
  if (!name || !message) return;
  const body = message + '\n\nFrom: ' + name;
  window.location.href = 'mailto:tylerkweskin@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  document.getElementById('contact-status').textContent = 'Your email app should open with a draft. If it does not, email tylerkweskin@gmail.com directly. This website has not sent your message.';
});
