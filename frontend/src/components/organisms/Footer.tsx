export default function Footer() {
    return (
        <footer className="w-full text-end py-4 text-xl text-gray-500 ibm-plex-mono-regular flex-grow">
            <p>
                Made with 🤖 and lots of ☕
            </p>
            <p>
                Join the project →
                <a
                    href="https://github.com/latai-community/hello_calculator/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white ml-1"
                > GitHub repo
                </a>
            </p>
        </footer>
    )
}