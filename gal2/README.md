# GAL Study Group #2: ES6 Stuff!

### Agenda:
 Be awesome at ES6 and learn together. 
 
#### TLDR;

- Morgan has a few videos to show
- Discuss the concepts in the videos
- Share & Discuss

## Topic

- **Shorthand properties & Object Enhancements**
  - Object literals are extended to support setting the prototype at construction, shorthand for foo: foo assignments, defining methods, making super calls, and computing property names with expressions. Together, these also bring object literals and class declarations closer together, and let object-based design benefit from some of the same conveniences.

- **Spread Operator**
  - The spread operator ... allows you to take an array and spead it out to individual values. 
  You can then take those values, push them into another array, or add values together.
  <code>
  let first = [1,2,3];
  let second = [4,5,6];
  function addThreeThings(a,b,c){
      let result = a + b + c;
      console.log(result);
  }
  addThreeThings(...first)
   * returns 6
  addThreeThings(...second)
  * returns 15 
<code>

- **String Templates**
Template strings provide syntactic sugar for constructing strings. This is similar to string interpolation features in Perl, Python and more. Optionally, a tag can be added to allow the string construction to be customized, avoiding injection attacks or constructing higher level data structures from string contents.


## [Google Classroom!](https://classroom.google.com/u/0/c/NTUyMTkwNDAxM1pa/a/NTUyMjA3MzE2OFpa/details)

## Practice

- Worked on object-literals - basics from http://es6katas.org/ 

## Next Week

- Continue with Egghead videos (3) 
- Pair Program Problems at http://es6katas.org/ 
- Liz is our presenter! 

## References I Used

1. https://babeljs.io
1. http://es6katas.org/ 
1. https://github.com/annarankin/es6_stuff
1. http://dev.venntro.com/2013/09/es6-part-1/
1. https://egghead.io
1. http://tddbin.com/
1. https://github.com/lukehoban/es6features
