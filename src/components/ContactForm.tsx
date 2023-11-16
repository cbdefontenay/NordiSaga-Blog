export default function ContactForm() {
  return (
    <div>
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
          <label
            htmlFor="name"
            className="block mb-2 font-medium text-yellow-500"
          >
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
            className="block mb-2 font-medium text-yellow-500"
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
            className="block mb-2 font-medium text-yellow-500"
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
          className="px-4 py-2 bg-yellow-500 rounded-md hover:bg-yellow-600 text-black font-bold font-rasa"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
