function fab(num: number):number{


    let first = 0;
    let second = 1;

    for(let i=0;i<num;i++){
        let third = first+second;
        
        console.log(first);
        first =second;
        second = third;   
    }
    return num;
}

fab(17)

function reverse(num : number[]) :void{

    let end = num.length-1;
    let start= 0;
    while (start< end){
         let temp =num[end];
         num[end]=num[start];
         num[start]=temp;
         start++;
         end--;
         
    }
    console.log(num)

}

reverse([1,2,3,4]);

function reverseFor(num:number[]):void{

    for(let i=num.length-1; i>=0;i--){
        console.log(num[i]);
    }

}
reverseFor([1,2,3,4,5,6,]);


function remove(num : number[],index:number){
    for(let i=index;i<num.length;i++){
        num[i]=num[i+1];
    }
    console.log(num);

}

remove([1,2,4,6,7],2)