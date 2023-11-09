import React,{useState} from "react";
import "./TodoList.css"
function TodoList() {
  let [activity, setActivity] = useState("");
  let [listData,setListData]=useState([]);
  let addActivity=()=>
  {
     setListData([...listData,activity])
     setActivity('');
     console.log(listData);
  }

  function removeActivity(i)
  {
    let updatedList=listData.filter((Element,index)=>i!=index)
    setListData(updatedList);
  }
  function clearAll()
  {
    setListData([]);
  }
  return (
    <div className="container">
      <div className="name">TODO LIST</div>
      <input className="inp"
        type="text"
        placeholder="Add Activity"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <button onClick={addActivity} className="addBtn">Add</button>
      <p className="list_hading">Your list here {":)"}</p>
      
        {
            listData.map((data,i)=><>
            <div className="value" >
                <p key={i}className="listData">{data}</p>
                <button onClick={()=>removeActivity(i)} className="removeOne">Remove(-)</button>
            </div>
            </>)
        }
       
      {listData.length >=1 && <button onClick={clearAll} className="removeBtn">Remove All</button>}
      
    </div>
  );
}

export default TodoList;
