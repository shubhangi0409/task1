//-----------Solution---------//
function algorithum( arr, n)
{
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
         
                let a = arr[i] * arr[i],
                b = arr[j] *arr[j],
                c = arr[k] * arr[k];
 
                if (a == b + c || b == a + c ||
                    c == a + b)
                    return true;
            }
        }
    }
 

    return false;
}
    
let arr = [ 3, 1, 4, 6, 5 ];
let ar_s = arr.length;
if (algorithum(arr, ar_s) == true)
    console.log("Yes");
else
    console.log ("No");

    // -------algorithumrithm------//

// Step :1  We use Three loops to take set of three different elements from the arr

// 1. we run three loops. so for every value of a, we take 
// all the values of b except itself.
// For every values of b we take all the values of a.

// 2. a,b,c are elements from the arr.

// Step :2 We run the pythagorus theoram i.e x*x + y*y = z*z,
// for all sets of (a,b,c).

// step :3 
// 1. if the value of a,b,c satisfy pythagorus theoram then 
// it print "yes".

// 2. if the value of a(18),b(24),c(30) don't satisfy pythagorus theoram then 
// it print "no".

//This is the solution of complexity O(n^3)
//because i use Three Loops where n is  
// MAX_limit intege