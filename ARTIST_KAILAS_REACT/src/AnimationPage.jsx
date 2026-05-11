import { supabase } from "./supabase";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

// Optimized Video Component
function VideoItem({ src }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Lazy load only when visible
          if (!video.src) video.src = src;

          // Pause all other videos (only one plays)
          document.querySelectorAll("video").forEach((v) => {
            if (v !== video) v.pause();
          });

          // video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.6 }
    );

    if (video) observer.observe(video);

    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={videoRef}
      className="art-img"
      muted
      controls
      playsInline
      preload="none"
    />
  );
}

// Main Page
export function AnimationPage() {
  const [gridData, setGridData] = useState([]);

  useEffect(() => {
    async function getVideo() {
      const { data, error } = await supabase
        .from("MP4_table")
        .select("id, video_url");

      if (error) console.log(error);
      else setGridData(data);
    }

    getVideo();
  }, []);

  return (
    <>
      <header>
        <div className="page-header">
          <h1 className="h1_1">Kailas S.R's Art Corner</h1>
          <h5>Animations</h5>
        </div>
      </header>

      <main className="Kai_grid1">
        {gridData.map((data) => (
          <article key={data.id} className="art-piece">
            <div className="art-img-wrapper">
              <VideoItem src={data.video_url} />
            </div>
          </article>
        ))}
      </main>

      <div className="bottom-nav" aria-label="Bottom navigation">
        <nav className="bottom-nav__inner" role="navigation">
          <Link to="/" className="bottom-nav__link">
            ART GALLERY
          </Link>
        </nav>
      </div>

      <footer>
        <hr />
      </footer>
    </>
  );
}