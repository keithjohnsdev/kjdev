import "../styles/SectionTitle.scss";
import PropTypes from "prop-types";

const SectionTitle = ({title}) => {
  return (
    <div className="section-title">
      <hr />
        <h3 className="title">{title}</h3>
    </div>
  )
}

SectionTitle.propTypes = {
  title: PropTypes.string
};

export default SectionTitle