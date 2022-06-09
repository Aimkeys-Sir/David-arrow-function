
superbowlWin = (record) => {
    //this is a lamda expression that says; 
    //look through the record collection and find the
    //entry whose result(key) is strictly equal to "W"(value) 
    const result = record.find(record => record.result === "W");
    //if result is truthy(there's some value in it), return the entry's year
    //otherwise return undefined
    return result ? result.year : undefined;
}

function superbowl(record) {

    //this is the entry I'm looking for
    let result;
    //we iterate over the record and find the item with a result "W"
    for (entry of record) {
        if (item.result === "W") {
            result = entry;
            break;
        }
    }
    return result ? result.year : undefined;
}

//lets see if it works

//this is a function that helps us create entries in the record faster
function createEntries(team, result, year) {
    const entry = {
        team: team,
        result: result,
        year: year
    }
    return entry;
}

//lets create 3 entries and store them in a record(array)
const record = [
    createEntries("Kansas City Chief", "L", 1968),
    createEntries("GreenBay packers", "W", 1971),
    createEntries("Newyork Jets", "L", 1972)]

//Now we see the truth
console.log(superbowlWin(record))
console.log(superbowl(record))

//Woo-Hoo!!! They do work the same now
