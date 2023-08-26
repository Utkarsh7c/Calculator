import { useState } from "react";
import { Button } from "../Components/Button"
import { Output } from "../Components/Output"


export const Calculator=()=>{
    let [s, set] =  useState("");

    

    const calculate=(val)=>{
        
        if(val=== "="){
      set(eval(s));
      console.log(s);
        }
        else if(val=== "C"){
           set(" Cleared");
           console.log(s);
        }
        else{
          set(s= s+val);
          console.log(s)
        }
    }
   
    return(
        <div className="container">  
         <div className="out">
         <Output value={s} className="col-8" /> 
         </div>
                <div className="conatinerr">
            <div className="row gap-2 justify-content-center m-2">        
            <Button  fn={calculate}  className="btn btn-secondary me-2 col-2"  val='('/>
            <Button  fn={calculate}className="btn btn-secondary me-2 col-2 " val=")" />
            <Button fn={calculate}className="btn btn-secondary me-2 col-2"  val='C'/>
            <Button fn={calculate}className="btn btn-secondary me-2 col-2" val="<-" />
            </div> 
            
            <div className="row gap-1 justify-content-center m-2">        
            <Button  fn={calculate}className="btn btn-light me-2 col-2"  val='7'/>
            <Button  fn={calculate}className="btn btn-light me-2  col-2" val="8" />
            <Button fn={calculate}className="btn btn-light me-2 col-2"  val='9'/>
            <Button fn={calculate}className="btn btn-secondary me-2 col-2" val="/" />
            </div> 
            
            <div className="row gap-1 justify-content-center m-2">        
            <Button fn={calculate}className="btn btn-light me-2 col-2"  val='4'/>
            <Button fn={calculate}className="btn btn-light me-2 col-2"  val="5" />
            <Button fn={calculate} className="btn btn-light me-2 col-2"  val='6'/>
            <Button fn={calculate} className="btn btn-secondary me-2 col-2" val="*" />
            </div> 
            
            <div className="row gap-1 justify-content-center m-2 ">        
            <Button fn={calculate} className="btn btn-light me-2 col-2"  val='1'/>
            <Button  fn={calculate}className="btn btn-light me-2 col-2" val="2" />
            <Button fn={calculate} className="btn btn-light me-2 col-2"  val='3'/>
            <Button fn={calculate} className="btn btn-secondary me-2 col-2" val="-" />
            </div> 
            
            <div className="row gap-1 justify-content-center m-2">        
            <Button fn={calculate}className="btn btn-light me-2 col-2"  val='0'/>
            <Button fn={calculate}className="btn btn-light me-2 col-2" val="." />
            <Button fn={calculate}className="btn btn-info me-2 col-2"  val='='/>
            <Button fn={calculate}className="btn btn-secondary me-2 col-2" val="+" />
            </div> 
            </div>
        </div>
 
    )
}