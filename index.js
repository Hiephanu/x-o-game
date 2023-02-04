const table = document.querySelector(".wrapper");
const pieces = document.querySelectorAll(".col");
const result =document.querySelector(".result")
const x_array = [];
const y_array = [];
const x_group=[];
const y_group=[]
function sort(arr) {
    for (let i=0;i<arr.length;i++){
        for (let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                tem=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=tem
            }
        }
    }
    return arr
}
function ckeck(arr){
    let hieu =arr[1]-arr[0]
        if(arr[2]-arr[1]==hieu){
            console.log("Win");
            result.innerHTML="Win"
        }
}
function cutArr(param){
        let arr=[...param]
    for (let i=0;i<param.length;i++){
        let remove =arr.splice(i,1)
        x_group.push(arr)
        arr=[...param]
}
}

let count=0;
pieces.forEach((piece, index) => {
    piece.addEventListener("click", () => {
        count++;
        piece.innerHTML = `<h1>${index}</h1>`
        if (count%2!=0){
            x_array.push(index);           
            piece.innerHTML = `<h1>x</h1>`
        }
        else {
            y_array.push(index);
            piece.innerHTML =`<h1>y<h1>`
        }
        sort(x_array);
    })
})
pieces.forEach((number,index) =>{
    number.addEventListener("click",()=>{
        if(x_array.length==3){
            ckeck(x_array)
        }
        if(x_array.length==4){
            cutArr(x_array)
            for(i=0;i<3;i++){
                ckeck(x_group[i])
            }
        }
        if(x_array.length==5){
            console.log("Draw");
            result.innerHTML="Draw"
        }
    })
})