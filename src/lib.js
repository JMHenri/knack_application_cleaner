import deepEqual from "deep-equal";
/**
 * This is a function.
 *
 * @param {object} data - the json data to be deduplicated.
 * @return {object} clean data with duplicate elements removed.
 *
 * @example
 *
 *     removeDuplicates(jsonData);
 */
export function removeDuplicates (data) {
  //filter objects and scenes
  //since data structure may not always be id-nested entities, iterative loops are used.
  let uniqueIds = [];
  data.versions = filterDuplicates(data.versions);


  for (let i of data.versions) {
    if(i.hasOwnProperty('objects')) {
      i.objects = filterDuplicates(i.objects);
      for(let j of i.objects) {
        if(j.hasOwnProperty('fields')){
          j.fields = filterDuplicates(j.fields);
        };
      }
    }
    if(i.hasOwnProperty('scenes')) {
      i.scenes = filterDuplicates(i.scenes);
      for(let k of i.scenes) {
        if(k.hasOwnProperty('views')) {
          k.views = filterDuplicates(k.views);
        };
      }
    };
  }
  return data;
};

function filterDuplicates(arr) {
  const uniqueIds = [];
  let unique;

  unique = arr.filter(element => {
    const isDuplicate = uniqueIds.includes(element._id);
    if (!isDuplicate) {
      uniqueIds.push(element._id);
      
      return true;
    }
    return false;
  });

  return unique;
}


/*  what a recursive implementation could look like
function removeDuplicates(el, field){
  let uniqueIds = [];
  el = el.filter( ... );
  if (field === "versions"){
    removeDuplicates(el.objects);
    removeDuplicates(el.scenes);
  }
  if (field === ...){
    ...
  }
}
*/