export default function ContactForm() {
  return (
    <div className="px-10 font-robotoMedium">
      <h1 className="text-center text-xl">Contactez-moi</h1>
      <form
        className="max-w-md mx-auto font-roboto"
        action={`https://formsubmit.co/cbdefontenay@gmail.com`}
        method="POSt"
      >
        {/* Honeypot */}
        <input type="text" name="_honey" className="hidden" />

        <input type="hidden" name="_template" value="box" />

        {/* Disable Captcha */}
        <input type="hidden" name="_captcha" value="false" />

        <input
          type="hidden"
          name="_next"
          value="http://localhost:4321/contact/success"
        />

        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-medium text-primary">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 font-medium text-primary"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block mb-2 font-medium text-primary"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-primary rounded-md hover:bg-yellow-600 text-black font-bold font-rasa"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
