import PropTypes from 'prop-types'

const Header = ({title}) => {
    console.log('props',title)
    return (
        <h1> {title}</h1>
    )
}

// Header.defaultProps={
//     title: "ankit"
// }

Header.propTypes={
    title: PropTypes.string.isRequired
}

export default Header;