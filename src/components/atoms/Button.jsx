const Button = ({ children,color, ...rest }) => {
    return (
      <button data-mdb-ripple="true" data-mdb-ripple-color="light" className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out  hover:bg-indigo-600 rounded-default mr-8 text-white px-8 py-3 text-sm" {...rest}>
        {children}
      </button>
    );
  };
  
Button.defaultProps = {
    color: "primary",
};
export default Button;