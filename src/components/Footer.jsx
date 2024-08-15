const Footer = () => {
    return (
        <footer className="px-3 pt-4 lg:px-9 border-t-2 bg-sky-50">
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">

                <div className="sm:col-span-2">
                    <a href="#" className="inline-flex items-center">
                        <img src="./logo.png" alt="logo" className="w-36" />
                    </a>
                    <div className="mt-6 lg:max-w-xl">
                        <p className="text-sm text-gray-800">
                        Discover the latest in tech gadgets, smartphones, laptops, and more. At Tech Menia, we bring you in-depth reviews, expert insights, and the best deals on your favorite tech products. Stay ahead of the curve with our curated content, designed to help you make informed decisions in the ever-evolving world of technology.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 text-sm">
                    <p className="text-base font-bold tracking-wide text-gray-900">Home</p>
                    <p className="text-base font-bold tracking-wide text-gray-900">About Us</p>
                    
                    <p className="text-base font-bold tracking-wide text-gray-900">Contact Us</p>
                    
                </div>

                <div>
                    <p className="text-base font-bold tracking-wide text-gray-900">COMPANY IS ALSO AVAILABLE ON</p>
                    <div className="flex items-center gap-1 px-2">
                        <a href="#" className="w-full min-w-xl">
                            <img src="https://mcqmate.com/public/images/icons/playstore.svg" alt="Playstore Button"
                                className="h-10" />
                        </a>
                        <a className="w-full min-w-xl" href="#">
                            <img src="https://mcqmate.com/public/images/icons/youtube.svg" alt="Youtube Button"
                                className="h-28" />
                        </a>
                    </div>
                    <p className="text-base font-bold tracking-wide text-gray-900">Contacts</p>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Email:</p>
                        <a href="mailto:fayshalbinamir002@gmail.com" title="send email">fayshalbinamir002@gmail.com</a>
                    </div>
                </div>

            </div>

            <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                <p className="text-sm text-gray-600">© Copyright 2024 Company. All rights reserved.</p>
                <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                    <li>
                        <a href="#"
                            className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy
                            &amp; Cookies Policy
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Disclaimer
                        </a>
                    </li>
                </ul>
            </div>

        </footer>
    );
};

export default Footer;