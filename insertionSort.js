function insertionSort(arr,n,k)
{
  current=k
  var j=k-1
  var keyvalue=a[k]
  while(j>=0 && a[j]>keyvalue)
    {
      a[j+1]=a[j]
      
   j--
    }
  a[j+1]=keyvalue
}