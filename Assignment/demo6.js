window.addEventListener('DOMContentLoaded',()=>{
    let x=[12,56,88,63,74,99,2,42,79,1];
    let count = 10;
    function elementsearch(element){
        console.log("Inside Search Function")
        let found=false;
        for(let i=0;i<x.length;i++){
            if(x[i]==element){
                found=true;
                break;
            }
        }
        return found;
    }
    let t1=document.querySelector("#t1");
    t1.addEventListener('blur',()=>{
        let element=document.querySelector("#t1").value;
        let result=elementsearch(element);
        if(result){
            document.querySelector("#add").disabled=true;
            document.querySelector("#update").disabled=false;
            document.querySelector("#delete").disabled=false;
            document.querySelector("#view").disabled=false;
            document.querySelector("#odd").disabled=false;
            document.querySelector("#msg").innerHTML="Element Found";
        }
        else{
            document.querySelector("#add").disabled=false;
            document.querySelector("#update").disabled=true;
            document.querySelector("#delete").disabled=true;
            document.querySelector("#view").disabled=false;
            document.querySelector("#odd").disabled=false;
            document.querySelector("#msg").innerHTML="Element Not Found";
        }


    });

    let b4=document.querySelector("#view");
   
    b4.addEventListener('click',()=>{
        let sp=document.querySelector("#array");
        let arr="";
        for(let j=0;j<x.length;j++){
            arr=arr+" "+x[j]+",";
        }
        sp.innerHTML="Array Elements [ "+arr+" ]";
    });

    let b5=document.querySelector("#odd");
    b5.addEventListener('click',()=>{
        let sp1=document.querySelector("#array");
        let arr1="";
        for(let j=1;j<x.length;j++){
            if (j % 2 != 0) {
                arr1=arr1+" "+x[j]+",";
            }
        }
        sp1.innerHTML="Array odd Position Elements [ "+arr1+" ]";
    });

    let b1 = document.querySelector("#add");
    b1.addEventListener('click',() => {
        let num = document.querySelector("#t1").value;
            x.push(parseInt(num));
            console.log(x);
            document.querySelector("#add").disabled = true;
            document.querySelector("#msg").innerHTML = "Number is Added Successfully";
            document.querySelector("#view").disabled = false;
    });
    let b2=document.querySelector("#update");
            b2.addEventListener('click',()=>{
                let z=window.prompt("Enter Element");
                z=parseFloat(z);
                const output=x.indexOf(z);
                if(output==-1){
                    x[output]=z;
                console.log(x);
                 document.querySelector("#msg").innerHTML = "Updated";
                }
                else{
                    document.querySelector("#edit").disabled=true;
                }
            });

    let b3 = document.querySelector("#delete");
            b3.addEventListener('click', () => {
                
                for (let i = 0; i < x.length; i++) {
					if (x[i]== document.querySelector("#t1").value) {
						x.splice(i, 1); 
						break;
                    }
                }
                    console.log(x);
                    document.querySelector("#msg").innerHTML = "Number is Deleted Successfully";
                document.querySelector("#array").innerHTML = "[ "+x+" ]";
                    
            });
});