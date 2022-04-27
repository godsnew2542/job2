let TextData =
    "I will make you into a great nation, and I will bless you; I will make your name great, and you will be a blessing.I will bless those who bless you, and whoever curses you I will curse; and all peoples on earth will be blessed through you.";
let N = SetSolutionN(0, 20);

console.log("1.1 ", Solution_1([2, 3, 3], 1));
console.log("1.2 ", Solution_1([9, 9, 9], 1));
console.log("1.3 ", Solution_1(N, 1));

console.log("2. ", Solution_2(TextData));

//ทำไม่เสร็จนะครับ
// console.log("3. ", Solution_3([3, 8, 9, 7, 6], 12));

console.log("4. ", Solution_4([9, 3, 9, 3, 9, 7, 9, 99, 3, 99]));

// ทำไม่ทันนะครับ
console.log("5. ", );

function Solution_1(array, up) {
    let data = "";
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        data = `${data}${element}`;
    }
    let dataInt = parseInt(data) + up;
    var myArr = String(dataInt)
        .split("")
        .map((num) => {
            return Number(num);
        });
    return myArr;
}

function Solution_2(text) {
    let maxValue = 0;
    let array = text.split(".");
    if (array.length) {
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            let array2 = element.split(" ");
            let max = array2.length;
            if (array2.length != 0) {
                for (let i = 0; i < array2.length; i++) {
                    const ele = array2[i];
                    let array3 = ele.split(";");
                    let array4 = ele.split(",");
                    if (array3.length > 1) {
                        ++max;
                    }
                    if (array4.length > 1) {
                        ++max;
                    }
                }
            }
            // console.log(max);
            if (max > maxValue) {
                maxValue = max;
            }
        }
    }
    return maxValue;
}

function Solution_3(array, k) {
    let NewArray = [];
    let CheckLength = array.length - 1;
    for (let index = 0; index < k; index++) {
        let tt = [];
        let A = array;
        let length = A.length - index;
        if (length < 0) {
            if (CheckLength > array.length - 1) {
                length = array.length - 1;
            } else if (length == -1) {
                length = CheckLength;
            } else {
                length = --CheckLength;
            }
        }
        let set1 = A[length];
        // A.pop();
    }
    console.log("==== ", NewArray);
}

function Solution_4(array) {
    let NewArray = [...new Set(array)];
    let NewObj = [];
    for (let index = 0; index < NewArray.length; index++) {
        const element = NewArray[index];
        let count = 0;
        let obj = {
            num: element,
            count: 0,
        };
        for (let i = 0; i < array.length; i++) {
            const ele = array[i];
            if (element == ele) {
                ++count;
            }
        }
        obj.count = count;
        NewObj.push(obj);
    }
    return NewObj;
}

function SetSolutionN(s, e) {
    let newArray = [];
    for (s; s <= e; s++) {
        newArray.push(s);
    }
    return newArray;
}