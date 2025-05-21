function Footer(){
    return(
        <footer className="w-full bg-gradient-to-r from-indigo-600 via-purple-600">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold md-4">Uyasha Ishini</h3>
                        <p className="text-white/80">Buiding the future of the web development</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-bold md-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#about"
                                className="text-white/80 hover:text-teal-200 transition-color">About</a>
                            </li>
                            <li>
                                <a href="#projects"
                                className="text-white/80 hover:text-teal-200 transition-color">Projects</a>
                            </li>
                            <li>
                                <a href="#about"
                                className="text-white/80 hover:text-teal-200 transition-color">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}