import React, { Component } from 'react';

function CategoryMenu(props){
  var categories = props.state.categories.map((cat)=>{
    return  <a onClick={
      ()=>{
          props.changeCategory(cat);
      }
    } 
    href="#" className="list-group-item">{cat}</a>;
  });
  return (    
    <div className="col-md-3">
        <p className="lead">Shop Name</p>
        <div className="list-group">
            {categories}
        </div>
    </div>
  )
}
export default CategoryMenu;