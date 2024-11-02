import { configureStore, createSlice } from "@reduxjs/toolkit";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import { Action } from "@remix-run/router";

const productSlice=createSlice({
    name:'products',
    initialState: {
        Veg:[
            {name:'tomato',price:200.5 },
            {name:'potato',price:100.4},
            {name:'brinjal',price:200.6},
            {name:'carrot',price:300.6},
            {name:'beans',price:100.4}
        ],
        NonVeg:[
            {name:'chicken',price:500.8},
            {name:'mutton',price:600.5},
            {name:'fish',price:1000.9},
            {name:'prawn',price:700.8},
           

        ],
        reducers:{}
    }
});


const cartSlice=createSlice({
    name:'cart',
    initialState: [],
    reducers: {
        addToCart: (state,action)=>{
            const status=state.find(item=>item.name==action.payload.name);

            if(status)
            {
                status.quantity +=1;
            }
            else{
                state.push({...action.payload,quantity:1});
            }
        },

        incrementQuantity: (state, action) => {
            const item = state.find((item) => item.name === action.payload.name);
            if (item) {
              item.quantity += 1;
            }
          },
        decrementQuantity:(state,action)=>{
            const item=state.find((item)=>item.name===action.payload.name);
            if(item && item.quantity>1){
                item.quantity -=1;
            }
            else{
                return state.filter((item)=>item.name !==action.payload.name);
            }
            
        },
        removeFromCart: (state, action) => {
            return state.filter((item) => item.name !== action.payload.name);

    }
},

})
const store=configureStore({
    reducer:{
        products:productSlice.reducer,
        cart:cartSlice.reducer,
    }

    
    
})
export const {addToCart,incrementQuantity,decrementQuantity,removeFromCart}=cartSlice.actions;
export default store;



