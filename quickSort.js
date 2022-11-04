
async function quickSort(a,start,end) {
  if(start>end)
 { return;
 }
 let index = await partition(a,start, end);
 // restore original state
 states[index] = -1;
 await Promise.all(
   [quickSort(a,start, index - 1), 
    quickSort(a,index + 1, end)
   ]);
}

async function partition(a,start,end)
{
  for(let i=start;i<end;i++)
  {
    states[i]=1

  }
  let pivotindex=start
  let pivotValue=a[end]
  states[pivotindex]=0

  for(let i=start;i<end;i++)
  {
    if(a[i]<pivotValue)
   {  await swapd(a,i,pivotindex)
     pivotindex++
     states[pivotindex]=-1
   }
  }
  
  await swapd(a,pivotindex,end)
  
  for (let i = start; i < end; i++) {
    // restore original state
    if (i != pivotindex) {
      states[i] = -1;
    }
  }
return pivotindex
}
async function swapd(a,i,j)
{ await sleep(25);   
  let temp=a[i]
  a[i]=a[j]
  a[j]=temp
}
function sleep(ms)
{
  return new Promise(resolve=>setTimeout(resolve,ms));
}

