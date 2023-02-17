import emailjs from "@emailjs/browser";

const emailJsServiceId = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
const emailJsTemplateId = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID;
const emailJsPublicKey = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY;

async function sendEmail(recipientEmail: string) {
  return emailjs.send(
    emailJsServiceId!,
    emailJsTemplateId!,
    {
      email: recipientEmail,
    },
    emailJsPublicKey!
  );
}

export { sendEmail };
