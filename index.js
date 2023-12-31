// Please solve the given problem in JS. Share the code and terminal output screenshot as well.

// Problem, take string input -> zzzzttteeeqqaao
// Sort first based on the frequency of characters in descending order, if freq is the same, then sort alphabetically in asc order.
// Expected output -> zzzzeeetttaaqqo


function sortString(str) {

    function sequence(arr,notorepeat)
    {
        let mergedArray = []
        for(let i=0;i<arr.length;i++)
        {
            for(let j=0;j<notorepeat;j++)
            {
                mergedArray.push(arr[i]);
            }
        }

        return mergedArray;
    }

    const charFreqency = {};

    for (let i = 0; i < str.length; i++) {
        if (charFreqency[str[i]]) {
            charFreqency[str[i]]++
        }
        else {
            charFreqency[str[i]] = 1;
        }
    }

    characterArray = Object.keys(charFreqency);
    const frequencyarray = Array(characterArray.length - 1)

    for (let i = 0; i < frequencyarray.length; i++) {
        frequencyarray[i] = []
    }
    for (let i = 0; i < characterArray.length; i++) {
        frequencyarray[charFreqency[characterArray[i]]].push(characterArray[i]);
    }

    let output = [];
    for (let i = frequencyarray.length - 1; i > 0; i--) {
        if (frequencyarray[i].length > 0) {
            frequencyarray[i].sort();
            output.push( sequence(frequencyarray[i],i));
        }
        else
        {
            for(let j = 0;j<i;j++)
            {
                output.push(frequencyarray[i]);
            }
        }
    }
    return output.flat(2).join('');
}
console.log(sortString("zzzzeeetttaaqqo"));

