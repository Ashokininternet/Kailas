import { useEffect, useState } from "react"
import { supabase } from "./supabase.js"
import { Link } from "react-router-dom";
import './HomePage.css'

function HomePage() {
    const [gridData, setGridData] = useState([]);
    const [lightbox, setLightbox] = useState(null);

    useEffect(() => {
        async function fetchImages() {
            const { data, error } = await supabase
                .from('images_table')
                .select('id, name, image_url')
            if (error) console.error(error)
            else setGridData(data)
        }
        fetchImages();
    }, [])

    // Close on Escape
    useEffect(() => {
        if (!lightbox) return
        const onKey = (e) => { if (e.key === 'Escape') setLightbox(null) }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [lightbox])

    // Lock scroll while open
    useEffect(() => {
        document.body.style.overflow = lightbox ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [lightbox])

    return (
        <>
            <header>
                <div className="page-header">
                    <h1 className="h1_1">Kailas S.R's Art Corner</h1>
                    <h5>ART GALLERY</h5>
                </div>
            </header>

            <main className="Kai_grid1">
                {gridData.map((data) => (
                    <article
                        key={data.id}
                        className="art-piece"
                        onClick={() => setLightbox({ src: data.image_url, name: data.name })}
                        style={{ cursor: 'zoom-in' }}
                    >
                        <img className="art-img" src={data.image_url} alt={data.name} />
                        <div className="art-details">
                            <p className="art-name">{data.name}</p>
                        </div>
                    </article>
                ))}
            </main>

            {lightbox && (
                <div
                    className="lightbox-overlay"
                    onClick={() => setLightbox(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label={lightbox.name}
                >
                    <div
                        className="lightbox-img-wrap"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="lightbox-close"
                            onClick={() => setLightbox(null)}
                            aria-label="Close"
                        >
                            ✕
                        </button>
                        <img src={lightbox.src} alt={lightbox.name} />
                        {lightbox.name && (
                            <div className="lightbox-caption">
                                <p className="art-name">{lightbox.name}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <div className="bottom-nav" aria-label="Bottom navigation">
                <nav className="bottom-nav__inner" role="navigation">
                    <Link to="/animation" className="bottom-nav__link">Animation</Link>
                </nav>
            </div>

            <footer>
                <hr />
            </footer>
        </>
    )
}

export default HomePage;