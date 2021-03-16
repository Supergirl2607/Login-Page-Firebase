import PillBotton from './PillBotton';
function Cards (){
  //JSX 
  return (
    <section className="Cards">
      <h2>Remember The time</h2>
      <iframe width="560" height="315" 
      src="https://www.youtube.com/embed/LeiFF0gvqcc?start=209" 
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
      encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="flex">
        <PillBotton text="Like" type="submit" click={(e) => { alert("Buen Gusto Musical 7w7");}}></PillBotton>
        <PillBotton text="Unlike" type="submit" click={(e) => { alert("Maicol no estaria orgullosx de ti .-."); }}></PillBotton>
      </div>
    </section>
  );
}

export default Cards;
