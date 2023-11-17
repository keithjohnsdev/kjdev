import "../styles/Gallery.css";
import GalleryImage from "./GalleryImage";

const Gallery = () => {
  return (
    <div className="gallery">
      <GalleryImage
        src="../../public/gallery/una.png"
        url="https://keithjohnsdev.github.io/una-health/"
      />
      <GalleryImage
        src="/gallery/misfits.png"
        url="https://keithjohnsdev.github.io/misfit-labs/"
        border
      />
      <GalleryImage
        src="/gallery/bffl.png"
        url="https://keithjohnsdev.github.io/bffl/"
      />
      <GalleryImage
        src="/gallery/wedocare.png"
        url="https://keithjohnsdev.github.io/we-do-care/"
      />
      <GalleryImage
        src="/gallery/trinity.png"
        url="https://keithjohnsdev.github.io/trinity-rehab/"
      />
      <GalleryImage
        src="/gallery/audiocastle.png"
        url="https://keithjohnsdev.github.io/audiocastle-studios/"
      />
    </div>
  );
};

export default Gallery;
