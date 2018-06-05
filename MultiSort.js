var data = [{
    USER: "bob",
    SCORE: 2000,
    TIME: 32,
    AGE: 16,
    COUNTRY: "US"
}, {
    USER: "jane",
    SCORE: 4000,
    TIME: 35,
    AGE: 16,
    COUNTRY: "DE"
}, {
    USER: "tim",
    SCORE: 1000,
    TIME: 30,
    AGE: 17,
    COUNTRY: "UK"
}, {
    USER: "mary",
    SCORE: 1500,
    TIME: 31,
    AGE: 19,
    COUNTRY: "PL"
}, {
    USER: "joe",
    SCORE: 2500,
    TIME: 33,
    AGE: 18,
    COUNTRY: "US"
}, {
    USER: "sally",
    SCORE: 2000,
    TIME: 30,
    AGE: 16,
    COUNTRY: "CA"
}, {
    USER: "yuri",
    SCORE: 3000,
    TIME: 34,
    AGE: 19,
    COUNTRY: "RU"
}, {
    USER: "anita",
    SCORE: 2500,
    TIME: 32,
    AGE: 17,
    COUNTRY: "LV"
}, {
    USER: "mark",
    SCORE: 2000,
    TIME: 30,
    AGE: 18,
    COUNTRY: "DE"
}, {
    USER: "amy",
    SCORE: 1500,
    TIME: 29,
    AGE: 19,
    COUNTRY: "UK"
}];

var sortList = [{
    key: 'SCORE',
    order: 'ASC'
}, {
    key: 'TIME',
    order: 'ASC'
}, {
    key: 'AGE',
    order: 'ASC'
}];
var i = 0;

var sortingFn = (a, b) => {
    let returnVal;
    if (sortList.length == i) {
        i = 0;
        return 0;
    }
    if (a[sortList[i].key] < b[sortList[i].key]) {
        returnVal = (sortList[i].order == 'ASC') ? -1 : 1;
        i = 0;
        return returnVal;
    } else if (a[sortList[i].key] > b[sortList[i].key]) {
        returnVal = (sortList[i].order == 'ASC') ? 1 : -1;
        i = 0;
        return returnVal;
    } else {
        i++;
        return sortingFn(a, b);
    }
}
data.sort((a, b) => sortingFn(a, b));