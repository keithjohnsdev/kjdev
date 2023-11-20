import "../styles/Gallery.css";
import GalleryImage from "./GalleryImage";

const Gallery = () => {
  return (
    <div className="gallery">
      <GalleryImage
        src="./una.png"
        url="https://keithjohnsdev.github.io/una-health/"
      />
      <GalleryImage
        src="./misfits.png"
        url="https://keithjohnsdev.github.io/misfit-labs/"
        border
      />
      <GalleryImage
        src="./bffl.png"
        url="https://keithjohnsdev.github.io/bffl/"
      />
      <GalleryImage
        src="./wedocare.png"
        url="https://keithjohnsdev.github.io/we-do-care/"
      />
      <GalleryImage
        src="./trinity.png"
        url="https://keithjohnsdev.github.io/trinity-rehab/"
      />
      <GalleryImage
        src="./audiocastle.png"
        url="https://keithjohnsdev.github.io/audiocastle-studios/"
      />
    </div>
  );
};

export default Gallery;
