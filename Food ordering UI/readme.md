  {/* <Card name={resData[0].info.name}/>
        <Card name={resData[1].info.name}/>
        <Card name={resData[2].info.name}/>
        <Card name={resData[3].info.name}/>
        <Card name={resData[4].info.name}/>
        <Card name={resData[5].info.name}/>
        <Card name={resData[6].info.name}/>
        <Card name={resData[7].info.name}/>
        <Card name={resData[8].info.name}/>
        <Card name={resData[9].info.name}/>
        <Card name={resData[10].info.name}/>
        <Card name={resData[11].info.name}/>
        <Card name={resData[12].info.name}/> */}



    1.cuisine.join()
    2.    ...
          Text-overflow-ellipses;
          overflow-hidden;
          white-space:nowrap;
    3.map,filter and reduce.
    4.Usestate.
    5.how two components communicate with each other.







    //search component
      -how to store input value.
      -why to use only usestable variable to store 'input value' not simple variable.
            Because in simple variable when reslist updated for the searched_data..it will render the whole component..means..every component which is also inside it...so let searchtext become again undefined.
      -then only just .include and smallcase scene in search button onclick.
      that's it. 
      -case insensitive functionality.


//swiggy api
data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info.name;


 img={card_img+restaurant.info.cloudinaryImageId} name={restaurant.info.name} locality={restaurant.info.locality} cuisines={restaurant.info.cuisines} cost={restaurant.info.costForTwo} avgRating={restaurant.info.avgRating} deliveryTime={restaurant.info.sla.deliveryTime}







 //Routing:
      1.npm i react-router-dom..its a javascipt library.
      2.Now how to use it..
            -import "createBrowserRouter" in main.js component..
      3.Done with your configuration..createBrowserRouter([
            {},
            {},
      ])
      4.Now just use it.. root.render(<RouterProvider router={config}>);


//Routing Error handling

      1.errorElemnt:<Error/>
      2.import useRouterError hook.
      3.it returns an object.
      4.Just use their info to make it good.


//Child Routing:









//SPA(Single Page Application).
      1.instead of <a href> use <Link to={}>
      2.Just import the Link.
