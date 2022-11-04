function bubbleSort( arr, n,i)
{
  if(i<n-1){
    for (j = 0; j < n-i-1; j++)
    {
      current=j
   
        if (arr[j] > arr[j+1])
        {
        swap(arr,j,j+1);
         
        }
    }
 
}
}