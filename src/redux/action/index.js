//for add to cart
export const addCart=(product)=>{
    return{
        type:"ADDITEM",
        payload:product
    }
}
//for delete to cart
export const deleteCart=(product)=>{
    return{
        type:"DELITEM",
        payload:product
    }
}
