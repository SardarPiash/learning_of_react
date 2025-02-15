import React, { useRef, useState } from 'react'

export default function ScrollingCatViewWithRef() {
    const catRef = useRef(null);
    const [cats, setCats] = useState(storeCatImage());
    console.log(cats)

    function scrollCatView(id){
       const map = getMap(catRef);
       const node = map.get(id);
       node.scrollIntoView({
        behaviour:"smooth",
        block:"nearest",
        inline:"center",
       });

    }
  return (
    <div>
        <div>
        <button onClick={()=>scrollCatView(cats[4])}>4</button>
        <button onClick={()=>scrollCatView(cats[6])}>6</button>
        <button onClick={()=>scrollCatView(cats[8])}>8</button>
        <button onClick={()=>scrollCatView(cats[10])}>10</button>
        </div>
         <ul>
            {cats.map((cat)=>(
                <li key={cat} ref={(node)=>{
                    const map = getMap(catRef);

                    map.set(cat,node);

                    // return () => {
                    //     map.delete(cat);
                    //   };
                }}>
                    <img src={cat} />
                </li>
            ))}
         </ul>
    </div>
  )
}

function getMap(catRef){
    if(!catRef.current){
        catRef.current = new Map();
    }
    return catRef.current;
}


function storeCatImage(){
    let cat = [];
    for(let i = 0 ; i <20 ; i++){  
        cat.push("https://loremflickr.com/320/240/cat?lock="+i);
    }
    return cat;
}