function Form({children}){
  return (
    <form className="justify-center items-start px-10 border bg-blue-300 p-10 text-center">
        {children}
    </form>
  );
}

export default Form;