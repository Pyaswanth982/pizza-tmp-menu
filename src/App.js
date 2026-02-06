import "./index.css";
import pizzaContent from "./data.js";

function App() {
    return (
        <div>
            <Header />
            <Menu />
            <Footer />
        </div>
    )
};

function Header() {
    return (
        <div>
            <h1 className="header"><strong><u>Pizza Mania1</u></strong></h1>
        </div>
    )
};

//version 1.0 send the components data manually
//----------------------------------------------

// function Menu() {
//     // console.log("Data: ",Data);
//     return (
//         <div>

//             <Pizza name = "Focaccia"
//                    ingredients =  "Bread with italian olive oil and rosemary" 
//                    price = {6}
//                    photoName = "pizzas/focaccia.jpg" 
//                    soldOut = "false"
//             />
//             <Pizza name = "Pizza Margherita"
//                    ingredients =  "Tomato and mozarella" 
//                    price = {10}
//                    photoName = "pizzas/margherita.jpg" 
//                    soldOut = "false"
//             />
//         </div>
//     )
// };

// version 2 sending the components data through iteration by using array method like map()
// -----------------------------------------------------------------------------------------

// function Menu() {
//     return (
//         <div className = "menu">
//             <h2 style = {{textAlign:"center", marginTop:"10px"}}><u>Our Menu</u></h2>

//             {pizzaContent.map((pizza) => {
//                 return(
//                     <Pizza name = {pizza.name}
//                            ingredients = {pizza.ingredients}
//                            price = {pizza.price}
//                            photoName = {pizza.photoName}
//                     />
//                 )
//             })}
//         </div>
//     )
// }


// function Pizza(props) {

//     return (
//         <div className="menuDetails">
//             <div>
//                 <img src={props.photoName} alt={props.name} height = "200px" width = "200px"></img>
//             </div>
// <div className = "menuDetails2">
//     <span>{props.name}</span>
//     <span>{props.ingredients}</span>
//     <span>₹. {props.price + 20}</span>
//             </div>
//         </div>
//     )
// };


//version 2 sending the components data through iteration by using array method like map() & 
//and sending the pizza object directly for calling
//---------------------------------------------------------------------------------------------
function Menu() {
    // const pizzas = pizzaContent;
    const pizzas = [1];
    const pizzaLength = pizzas.length;
    console.log(pizzaLength);

    // return (
    // <div className="menu">
    //     <h2 style={{ textAlign: "center", marginTop: "10px" }}><u>Our Menu</u></h2>
    //     <ul className="pizzas">
    //             {/* Performing Short Circuiting process */}
    //             {pizzas && (
    //                     pizzas.map((pizza) => {
    //                         return (
    //                             // <Pizza name = {pizza.name}
    //                             //        ingredients = {pizza.ingredients}
    //                             //        price = {pizza.price}
    //                             //        photoName = {pizza.photoName}
    //                             // />
    //                             <Pizza pizzaObj={pizza}
    //                                 key={pizza.name}//to avoid the error in the console window
    //                             />
    //                         )
    //                     })
    //             )
    //             }
    //         </ul>
    //     </div>
    // )


    return (
        <div className="menu">
            <h2 style={{ textAlign: "center", marginTop: "10px" }}><u>Our Menu</u></h2>
            <p>Lists starting...</p>
            <ul className="pizzas">
                {/* Now using the Ternary Operator */}
                {pizzaLength > 0 ?
                    (
                        pizzaContent.map((pizza) => {
                            return (
                                <Pizza pizzaObj={pizza} key={pizza.name} />
                            )
                        })

                    ) :
                    (
                        <p style = {{
                            color:"blue"
                        }}>Pizzas are very less now, we are preparing again. Please expect some delay !!!</p>  
                    )
                }
            </ul>
        </div>
    )
}


function Pizza(props) {
    // console.log("Props: ",props);
    // if(props.pizzaObj.soldOut) {
    //     return
    // }
    return (
        <li className="menuDetails">
            <div>
                {/* <img src={props.photoName} alt={props.name} height = "200px" width = "200px"></img> */}
                <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} height="200px" width="200px"></img>
            </div>
            <div className="menuDetails2">
                {/* <span>{props.name}</span>
                <span>{props.ingredients}</span>
                <span>₹. {props.price + 20}</span> */}
                <span>{props.pizzaObj.name}</span>
                <span>{props.pizzaObj.ingredients}</span>
                {/* <span>₹. {props.pizzaObj.price + 20}</span> */}
                <span>{props.pizzaObj.soldOut ?
                        (
                            "Sold-out"
                        ):
                        (
                            `₹. ${props.pizzaObj.price}`
                        )
                        }
                </span>
            </div>
        </li>
    )
};

function Footer() {

    //Without Condition Rendering for the Footer code
    //-----------------------------------------------------

    // const ist = new Date().toLocaleTimeString();
    // const time = ist.slice(0, 1);
    // const merdian = ist.slice(8, 11);
    // console.log(time);
    // console.log(merdian);

    // return (
    // <div className="footerelements">
    //     <span>{time}</span>
    //     <span>{merdian.toUpperCase()} </span>
    //     <span>Hey shop is open now. Enjoy Exploring !!</span>
    // </div>
    // )

    //By Using Conditional Rendering process for the footer one
    //---------------------------------------------------------------
    const hour = new Date().getHours();
    const openHours = 11;
    const closeHours = 22;
    const isHour = (hour >= openHours) && (hour <= closeHours);
    return (
        <div className="footerelements">
            {/* Performing Short Circuiting process */}
            {isHour && (
                <>
                    <p>{new Date().toLocaleTimeString().slice(0, 9)} Shop will be open till {closeHours}:00. Enjoy Exploring !!</p>
                    <p>Footer branch is active now and also upstreamed</p>
                    <p>Upstreamed</p>
                    <button className="order"><strong>Order</strong></button>
                </>
            )}
        </div>
    )
};

// function Status() {
//     const IST = new Date();
//     const time = IST.toLocaleTimeString();
//     console.log(IST);
//     console.log(time);

//     const timeString = time.slice(0, 1);
//     console.log("Time =", timeString);
//     console.log("Length =", time.length);

//     const merdian = time.slice(8, 10);
//     console.log("Merdian =", merdian);

//     var status = "";
//     if (merdian == "pm") {
//         if (time < 10) {
//             var status = "Still shop is not opened. Visit at after 10 !!";
//         } else {
//             var status = "Hey shop is open. Enjoy Exploring !!";
//         }
//     } else {
//         if (time > 10) {
//             var status = "Now shop is closed. Please visit tomorrow !!";
//         } else {
//             var status = "Hey shop is open. Enjoy Exploring !!";
//         }
//     }
//     console.log("After loops =",status);

//     return (
//         <div className = "statusMessage">
//             <p>{status}</p>
//             <br />
//         </div>
//     )

// };

export default App;