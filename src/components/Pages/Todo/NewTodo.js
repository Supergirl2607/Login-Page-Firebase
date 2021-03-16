import FormField from '../../Forms/FormField';
import CardHolder from '../../Cards/CardHolder';
import { MdAdd } from 'react-icons/md';

function NewTodo({ onChange, value, onAddNew}){
  return (
    <CardHolder>
    <section className="TodoAddNew">
      <section>
        <FormField className=" flex justify-center mx-auto text-center p-5 border-2 text-black"
          type="text"
          id="txtNTodo"
          fname="txtNTodo"
          onChange={onChange}
          value={value}
          caption="Nuevo Ingreso"
          className=" flex p-2 m-2 shadow text-center text-black border-2"
          labelClassName=" justify-center flex text-black "
          containerClassName=" justify-center text-black"
          onKeyUp={(e) => { if (e.keyCode == 13) { onAddNew(e);} }}
        />
        
        <div className= "flex w-full justify-center items-center">
        <MdAdd size={"3rem"} onClick={onAddNew}></MdAdd>
        </div>
      </section>
    </section>
    </CardHolder>
  );
}

export default NewTodo;
