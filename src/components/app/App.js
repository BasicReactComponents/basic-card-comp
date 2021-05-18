import React from "react";

import Card from "../card/Card";
import "./app.css"

const App = () => {
    return(
        <div className="app___container">
            <Card 
                title="Card Title" 
                author="Leo Cucinell" 
                photo="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel laoreet orci, vitae pharetra justo. Donec metus purus, lacinia at dolor a, ornare eleifend augue. Nam vel eleifend risus. Proin vitae est sagittis, luctus lorem vitae, interdum libero. Nulla ut arcu nisi. Proin eu semper nibh. Duis id est imperdiet, fermentum dui at, faucibus ex. Integer laoreet enim nec eros suscipit viverra. Pellentesque nisi quam, malesuada nec nibh ut, convallis malesuada enim. Aliquam ut bibendum metus. Donec sollicitudin arcu ut volutpat dapibus."
            />
        </div>
    );
};

export default App;