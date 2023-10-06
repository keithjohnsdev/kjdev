import Header from "./Header"
import PropTypes from "prop-types"

const Layout = ({ children }) => {
    return (
      <div>
        <Header />
        <main>
          {children} {/* Render the page content here */}
        </main>
        {/* Footer here if needed */}
      </div>
    );
  };

  Layout.propTypes = {
    children: PropTypes.node.isRequired, // Ensure 'children' is provided and is of type 'node'
  };

export default Layout