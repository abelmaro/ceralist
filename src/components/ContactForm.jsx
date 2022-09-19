const ContactForm = () => {
    return (
        <form className="max-w-screen-lg mt-10" id="contact">
            <div className="flex">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name"
                    >
                        First Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-[#e4e4e4] text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="text"
                        placeholder="Jane"
                    />
                </div>
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                    >
                        Email Address
                    </label>
                    <input
                        className="appearance-none block w-full bg-[#e4e4e4] text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-email"
                        type="email"
                        placeholder="********@*****.**"
                    />
                </div>
            </div>

            <div className="w-full px-3">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                >
                    Your Message
                </label>
                <textarea
                    rows="10"
                    className="appearance-none block w-full bg-[#e4e4e4] text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></textarea>
            </div>
            <div className="flex lg:justify-end w-full px-3 my-5">
                <button
                    className="w-full lg:w-72 shadow bg-black hover:bg-white hover:text-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                    type="submit"
                >
                    Send Message
                </button>
            </div>
        </form>
    );
};

export default ContactForm;