import PropTypes from "prop-types";

const GalleryImage = (props) => {
  return (
    <div className="img-wrapper" onClick={() => window.open(props.url, '_blank', 'noopener,noreferrer')}>
    <img
      className={ props.border ? "image border" : "image" }
      src={props.src}
      alt=""
    />
  </div>
  )
}

GalleryImage.propTypes = {
    src: PropTypes.string,
    url: PropTypes.string,
    border: PropTypes.bool,
  };

export default GalleryImage