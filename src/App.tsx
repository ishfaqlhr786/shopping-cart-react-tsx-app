import React,{useState} from 'react';
import {useQuery} from  'react-query' 
import  Drawer  from '@material-ui/core/Drawer'
import './App.css';
import LinearProgress  from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge'
import {Wrapper} from './App.styles'
import Items  from './Items/Items'

export type CartItemType={
  id:number,
  category:string,
  description:string,
  image:string,
  price:number,
  title:string,
  amount:number


}
const getProducts= async (): Promise<CartItemType[]>=>
  await (await fetch(`https://fakestoreapi.com/products`)).json();


const App=()=> {
  const [cartOpen,setCartOpen]=useState(false);

  const {data,isLoading,error} = useQuery<CartItemType[]>('products',getProducts);
  console.log(data);
  const getTotalItems=()=>
    null;
  
  const handleAddToCart=(clickedItem:CartItemType)=> null;
  const handleRemoveFRomCart=()=>null;
  if(isLoading) return <LinearProgress/>
  if(error) return <div>Some thing went wrong</div>
  return (
    <>
   <wrapper>
<Grid container spacing={3} >
  
  {
    data?.map((item)=>(
      <Grid item key={item.id} xs={12} sm={4}>
        <Items item={item} handleAddToCart={handleAddToCart}/>

      </Grid>
    ))}

    
  
</Grid>
 </wrapper>
 </>
  
  );
}

export default App;
