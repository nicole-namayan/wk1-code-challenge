//Grade generator
/*
Using the grade function below do the following: 
  1. Receive a score out of 100 
  2. Return the corresponding letter grade following this grade scale:

   80-100 = A 
   60-79 = B 
   50-59 = C 
   40-49=  D 
   below 39 = E
*/

function grade(){
  
    if(grade = 100 && grade >=80  )

    {
      return 'you got an A';
      
    }

    if(grade >= 60 && grade <= 79 )
    
    {
        return 'you got a B';
    }

    if(grade >= 50 && grade <= 59 )

    {
      return 'you got a C';
    }

    if(grade >= 40 && grade <= 49 )

    {
      return 'You got a D';
    }

    if(grade <= 39 )

    {
      return 'you got a E';
    }
    
  }
    

    