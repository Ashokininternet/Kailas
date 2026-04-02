import { useEffect, useState } from "react"
import { supabase } from "./supabase.js"
import { Link } from "react-router-dom";
import './HomePage.css'
function HomePage() {
    /*The data from the super base is being stored in this useState */
    const [gridData, setGridData] = useState([]);

    /*useEffect Makes sure the webiste data is loaded */
    useEffect(() => {
        async function fetchImages() {
            /* Take the data from the supabase function and sends it to useEffect*/
            const { data, error } = await supabase
                .from('images_table')
                .select('id, name, image_url')

            if (error) console.error(error)
            else setGridData(data)
        }
        fetchImages();
    }, [])
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
                        <img className="art-img" src={data.image_url} alt={data.name} />
                        <div className="art-details">
                            <p className="art-name">{data.name}</p>
                        </div>
                    </article>
                ))}
            </main>
            <div className="bottom-nav" aria-label="Bottom navigation">
                <nav className="bottom-nav__inner" role="navigation">
                    <Link to="/animation" className="bottom-nav__link">Animation</Link>

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
