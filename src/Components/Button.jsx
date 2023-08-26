export const Button= ({fn,className,val})=>{
const clicked =()=>{

   fn(val);
    
} 
return(
    <button  onClick={clicked}   className={className} >{val}</button>
)
}