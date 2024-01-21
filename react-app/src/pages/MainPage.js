import Navbar from "../components/Navbar";
import Topic from "../components/Topic";
import "./pages.css";

function MainPage(){
    const topics = [
        ["Test", "Subtitle"],
        ["Test", "Subtitle"],
        ["Test", "Subtitle"],
        ["Test", "Subtitle"],
        ["Test", "Subtitle"],
        ["Test", "Subtitle"]
    ];

    return (
        <>
            <Navbar />
            <main>
                <section className="topics-box">
                    {topics.map(([title, subtitle]) => {
                        return <Topic title={title} subtitle={subtitle}/>;
                        })}
                </section>
            </main>
        </>
    );
}

export default MainPage;