function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

/*How to use:
 0, 1, 2, 3, 4, 5, 6,  7,  8,  9, 10,  
 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 
 for e.g. position 4 of the fibonacci sequence will return the index value of 5. 
 */

fibonacci(4)