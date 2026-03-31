import { gridData } from "./Data/AnimationsData"
import './HomePage.css'

export function AnimationPage() {
    return (
        <>
            <header>
                <div className="page-header">
                    <h1 className="h1_1">Kailas S.R Art Corner</h1>
                    <h5>Animations</h5>
                </div>
            </header>
            <main className="Kai_grid1">
                {gridData.map((data) => {
                    const isVideo = data.img.endsWith(".mp4");
                    return (
                        <article key={data.id} className="art-piece">
                            <div className="art-img-wrapper">
                                {isVideo ? (
                                    <video
                                        className="art-img"
                                        src={data.img}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                ) : (
                                    <img
                                        className="art-img"
                                        src={data.img}
                                        alt={data.name}
                                    />
                                )}
                            </div>
                        </article>
                    );
                })}
            </main>
            <div className="bottom-nav" aria-label="Bottom navigation">
                <nav className="bottom-nav__inner" role="navigation">
                    <a href="/Kailas/#/" className="bottom-nav__link" title="Art Gallery">ART GALLERY</a>
                    {/* <a href="/Kailas/#/crafts" className="bottom-nav__link" title="Crafts">Crafts</a> */}
                </nav>
            </div>
            <footer>
                <hr />
            </footer>
        </>
    )
}