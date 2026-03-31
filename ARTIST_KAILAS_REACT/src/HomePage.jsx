import React from "react"
import { gridData } from "./Data/data"
import './HomePage.css'
function HomePage() {
    return (
        <>
            <header>
                <div className="page-header">
                    <h1 className="h1_1">Kailas S.R Art Corner</h1>
                    <h5>ART GALLERY</h5>
                </div>

            </header>

            <main className="Kai_grid1">
                {gridData.map((data) => (
                    <article key={data.id} className="art-piece">
                        <img className="art-img" src={data.img} alt={data.name} />
                        <div className="art-details">
                            <p className="art-name">{data.name}</p>
                        </div>
                    </article>
                ))}
            </main>
            <div className="bottom-nav" aria-label="Bottom navigation"> 
                <nav className="bottom-nav__inner" role="navigation"> 
                    <a href="/Kailas/#/animation" className="bottom-nav__link" title="Animation">Animation</a> 
                    
                    {/* <a href="/Kailas/#/crafts" className="bottom-nav__link" title="Crafts">Crafts</a>  */}
                </nav> 
            </div>
            <footer>
                <hr />
            </footer>
        </>
    )
}
export default HomePage;
