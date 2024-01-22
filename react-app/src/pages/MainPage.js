import SingleFilter from "../components/SingleFilter";
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

                <aside className="filters-box">
                    <SingleFilter />
                    <SingleFilter />
                    <SingleFilter />
                    <SingleFilter />
                </aside>

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