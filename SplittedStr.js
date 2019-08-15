const STR = "((aa+bb))";
const DELIMETERS = ["(", "aa", ")","a"];

splitByDelimeters = (str, delimeters) => {
    delimeters.sort((a,b) => 
        b.length - a.length || b.localeCompare(a) 
    );

    if (delimeters.indexOf(str) > -1) {
        return str;
    }

    for (let i = 0; i < delimeters.length; i++) {
        let matched = str.indexOf(delimeters[i]);
        if (matched > -1) {
          let first = str.substring(0, matched);
          let second = delimeters[i];
          let third = str.substring(matched + second.length);
          if (first.length === 0) {
            return [].concat(...[second, splitByDelimeters(third, delimeters)]);
          } else if (third.length === 0) {
            return [].concat(...[splitByDelimeters(first, delimeters), second]);
          } else {
            return [].concat(...[splitByDelimeters(first, delimeters), second, splitByDelimeters(third, delimeters)]);
          }
        }
      }
      return str; 
}

let res = splitByDelimeters(STR, DELIMETERS);
console.log(res);