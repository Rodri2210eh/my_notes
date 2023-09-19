import { SpanLi } from "../components/generalComponents/SpanLi";

function HomePage() {
    return (
        <div>
            <div className="flex flex-row m-5">
                <div className="bg-[#1F1D2B] m-7 justify-center align-middle">
                    <h1 className="text-2xl font-bold m-7 text-[#f98866] font-serif">
                        About EspiNotes
                    </h1>
                    <p className="m-7 text-left text-lg">
                        Welcome to EspiNotes, the ultimate note-taking companion designed
                        by Rodrigo Espinach. With a passion for efficiency and simplicity,
                        EspiNotes is here to transform the way you capture, organize, and
                        manage your thoughts, ideas, and important information.
                    </p>
                    <h2 className="text-xl font-bold m-7 text-[#f98866] font-serif">
                        Why Choose EspiNotes?
                    </h2>
                    <p className="m-7 text-left text-lg">
                        EspiNotes is more than just a note-taking app; it's a reflection of
                        our commitment to helping you be at your productive best.
                    </p>
                </div>
                <div className="max-w-2xl h-max m-10">
                    <img src="../../images/imgNotes.jpg" />
                </div>
            </div>

            <div className="flex flex-col ">
                <div className="ml-7">
                    <h1 className="text-2xl font-bold m-7 text-[#f98866] font-serif">
                        Here's why you'll love using EspiNotes:
                    </h1>
                </div>
                <div className="flex flex-row m-5 text-left text-lg">
                    <ul className="bg-[#1F1D2B] m-7 p-8">
                        <li>
                            <p>
                                <SpanLi>Intuitive and User-Friendly:</SpanLi> We believe that taking notes should be effortless. With our clean and intuitive interface, you can start jotting down your ideas within seconds. No steep learning curve, just pure simplicity.
                            </p>
                        </li>
                        <li>
                            <p>
                                <SpanLi>Seamless Synchronization:</SpanLi> EspiNotes keeps your notes in sync across all your devices. Whether you're on your computer, smartphone, or tablet, your notes are always accessible when you need them.
                            </p>
                        </li>
                        <li>
                            <p>
                                <SpanLi>Organization Made Easy:</SpanLi> We understand the importance of keeping your notes organized. That's why EspiNotes offers powerful tagging, categorization, and search capabilities, ensuring you can find what you need when you need it.
                            </p>
                        </li>
                    </ul>
                    <ul className="bg-[#1F1D2B] m-7 p-8">
                        <li>
                            <p>
                                <SpanLi>Security:</SpanLi> We take your privacy and security seriously. Rest assured that your notes are protected with state-of-the-art security measures.
                            </p>
                        </li>
                        <li>
                            <p>
                                <SpanLi>Continuous Improvement:</SpanLi>EspiNotes is a labor of love, and we're committed to making it better every day. Expect regular updates, new features, and improvements to enhance your note-taking experience.
                            </p>
                        </li>
                        <li>
                            <p>
                                <SpanLi>Collaboration:</SpanLi> Share notes and collaborate with colleagues, friends, or family effortlessly. EspiNotes supports teamwork and knowledge sharing.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center align-middle text-center flex-col bg-[#1F1D2B] m-7 p-3">
                <h1 className="text-2xl font-bold text-[#f98866] font-serif m-2">
                    Join the EspiNotes Community
                </h1>
                <p className="m-7 text-left text-lg">
                    Join thousands of users who have chosen EspiNotes as their go-to note-taking app. Whether you're a student, professional, creative thinker, or simply someone who values staying organized, EspiNotes is here to support your journey.
                    Experience the power of efficient note-taking with EspiNotes, and let us help you turn your thoughts into actions.
                </p>
            </div>
        </div>
    )
}

export default HomePage;