arr=[0,0,0,0]
var s=0 
var k=0

let states=[]
var a=[]
var n=250
var y
var wid
var rad
var speede=6.5
var repea
var current=n+2
var isItOn=0
function setup() {

  slider=createSlider(5,500,n)
  p1=createP("Array Size")
  p1.position(25,15)
  p2=createP("Speed")
  p2.position(320,15)
  speedSlider=createSlider(5,500,30)
  slider.position(0,50)
  speedSlider.position(300,50)
  button=createButton("New Array")
  button.position(150,50)
  button.mousePressed(refresh)
  speedSlider.input(changespeed)
  canva=createCanvas(windowWidth, windowHeight-100);
  canva.position(0,80)
  y=height
  wid=width/n
  rad=wid/10
for(var i=0;i<n;i++)
  {
    a.push(random(3,height))
    states.push(-1)
  }
// quickSort(a,0,n-1)

}
changespeed=()=>
{
  speede=map(speedSlider.value(),3,60,3,60)

}


var sorte=""

 function draw() {
var ele=document.getElementsByName('Sorts')
for(var e=0;e<ele.length;e++)
{
  if(ele[e].checked)
  {
   sorte=ele[e].value

  }
}
  s=0
  background(180,70,25)

  fill(0, 102, 153);
  slider.input(sliderChange)
  stroke(150)

  strokeWeight(1)
  
  fill(20,255,255)
  if(n==1)
    rad=0
  else
    rad=3
  for(var i=0;i<n;i++)
  {var color=map(a[i],3,height,55,255)
    fill(0,color,color)
    
   
  
    rect(0+s,y,wid,-(a[i]),rad)
    s+=wid
    
  }

 if(sorte=="selection")
  {
   if(arr[1])
    {
      selectionSort(a,n,k)
    }
    else
    {k=-1
      arr[0]=0
    arr[1]=1
    arr[2]=0
    arr[3]=0


  }
 
  }
 
  else if(sorte=="bubble")
   {if(arr[0])
    {
      bubbleSort(a,n,k)
    }
    else{k=0
     arr[0]=1
     arr[1]=0
     arr[2]=0
     arr[3]=0



    }}
   
    else if(sorte=="insertion"){
    if(arr[2])
    {
      insertionSort(a,n,k)
    }
    else {
      k=0
      arr[0]=0
      arr[1]=0
      arr[2]=1
      arr[3]=0



      
  }
}
else if(sorte=="quick"){
  if(arr[3])
  {
    if(isItOn==0)
    {
  window.alert("some features are not optimized with quicksort like combining diff sorting algo also press new array after slider change for quicksort")

      callquickSort()
    }
    isItOn=1

  }
  else {
    k=0
    isItOn=0
    arr[0]=0
    arr[1]=0
    arr[2]=0
    arr[3]=1


    
}}

frameRate(speede)
  k++
  if(k>n)
  {
    k=0
  }
}

callquickSort=()=>
{
  quickSort(a,0,n-1)
}