function selectionSort(arr,  n,i2)
{
  
    // One by one move boundary of unsorted subarray
    
        // Find the minimum element in unsorted array
        min_idx = i2;
        for (j = i2 + 1; j < n; j++)
        if (arr[j] < arr[min_idx])
            min_idx = j;
            current=min_idx
     
        swap(arr,min_idx, i2);
   
    
}