export const Output=({value ,className})=>{

     return(
      //  <input type="text" class='form-control' id='floatingInput' />
      <div >
          <h1 > CALCULATOR</h1>
      <textarea  className={className} col="1" rows="1" value={value} />
      </div>
     )
}