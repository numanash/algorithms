
class Solution{
	
	/**************
         Question # 1
	**************/
	
    /**** Solution ****/
    activityselection(start,end,N){

        if(N !== start.length || N !== end.length){
            throw new Error("the value of N should be equal to the length of start or finsh time arrays length")
        }
        // We will sort the start and end arrays
         start.sort()
         end.sort()
      
        // suppose the initial activity is 
        let activity = 0;
        // We will loop until the i is less then the N(number of activities Given)
         for(let i=0;i<N;i++){
          //  We will check if the startArr at the i index is greater or equal to the endArr at index activity
           if(start[i]>=end[activity]){
             //  and then assign  i to the activity as it will be the maximum number of activities which a person can performed
             activity = i;
           }
         }
        //  returning maximum number of activities
        return activity;
    } 
	
	

	/**************
	 Question # 2
	**************/

    // In Question 2 solution for the equilibrium is not accurate because according to the defination it is a point at which before and after sum of variable are equal 
    //  In example 2 equilibrium point is 5 and it is on position/index 2 inside array becuase array starts form index 0
    //  similar in example 1
	
     /**** Solution ****/
    equilibriumPoint(arr,n){
        //   One for Reverse Array and One for Forward Array
        let sumForward=[], sumReverse=[];
        // if Length of Array is 1 it should return 0 position
        if(n === 1) return 0;
        // adding sum of previous and next for sumForward 
        // for sumReverse adding sum of final and before final in reverse order
        for(let i=0; i< n; i++){
            if(i){
                sumForward.push(sumForward[i-1]+arr[i])
                sumReverse.push(sumReverse[i-1]+arr[arr.length-1-i])
            }else{
                sumForward.push(arr[i])
                sumReverse.push(arr[arr.length-1])
            }
        }
        
        // Comparing the sums at indexes to get the eruilibrium position 
        for(let i=0; i<n; i++){
            if(sumForward[i]===sumReverse[arr.length-1-i])
                return i;
        }
        // if not found any then
        return -1        
    } 
	
	
	
	/**************
         Question # 3
	**************/
	
     /**** ISSUES ****/
    //  Example 2 have issue as 'aaa' is provided as string so here the start is 0 and end is 2 where inbetween we have only 1 char as it is repetitive char a so it's answer will be 1
    
    /**** Solution ****/
    longestSubstrDitinctChars(S){
        // lets create an object to store String
        let stringObj = {};
        // let initially the result is 0
        let result=0,x=0,y=0,lengthOfS=S.length;
        // Loop until the y is less then the string length
        while(y<lengthOfS){
        
            // add properties into the obj until chars of strings are distinct
            while(y < lengthOfS && !stringObj[S[y]]){
                stringObj[S[y]] = true;
                y++;
            }
            // result update on the basis of longer length of distinct chars 
            result = Math.max(result, y-x);
            if(y === lengthOfS) break;
            
            
            // deleting the properties if the char at index y and x repeated
            while(x < lengthOfS && S[x] !== S[y]){
                delete stringObj[S[x]];
                x++;
            }
            
            x++;
            y++;
        }
        // final result
        return result;
        
    }

   /**************
         Question # 4
	**************/
	
    /**** Solution ****/
    maxMeetings(start, end, N)
    {
    	//Declaring variables
        let arraysOfArrays = [], lastFinishTime=0, result=0;
    	
        // We create a loop for n no.of meetings and create a new array and push that array into
        // arraysOfArrays 
        // adding startTime, finishTime and their index into an array and pushing it to arraysOfArrays
        for (let i = 0; i < N; i++){
            arraysOfArrays.push([start[i], end[i], i + 1]);
		}
        
    //custom sort so that we can compare the finish time and return it accordingly 
    // if the finish time is same for the arrays then we will return the indexs and sort accordingly
        arraysOfArrays.sort((a, b)=> (a[1] == b[1])? a[2] - b[2] : a[1] - b[1]);
        
        // Another loop to indentify the final result for meetings that can be held in the signle room
        for (let i = 0; i < N; i++) 
        {
            //We will check if the start time of meeting in arraysOfArrays is greater than or equal 
            //to the finish time of previously selected meeting(lastFinishTime) at index i then 
            //we increment the result and update lastFinishTime at index i.
            if (arraysOfArrays[i][0] >= lastFinishTime) {
                lastFinishTime = arraysOfArrays[i][1];
                result++;
            }
        }
        //returning the result.
        return result;
    }
}



let solution = new Solution();

let N = 4, start= [1, 3, 2, 5], end=[2, 4, 3, 6];
let result1 = solution.activityselection(start,end,N)
console.log({result1})

let A= [1,3,5,2,2];
N= 5;
let result2 = solution.equilibriumPoint(A,N)
console.log({result2})

let S = "geeksforgeeks";
let result3 = solution.longestSubstrDitinctChars(S)
console.log({result3})

start=[75250, 50074, 43659, 8931, 11273, 27545, 50879, 77924];
end = [112960, 114515, 81825, 93424, 54316, 35533, 73383, 160252];
N=8;
let result4 = solution.maxMeetings(start,end,N)
console.log({result4})

