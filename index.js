// Write your solution in this file!
console.log('Connected')


const driver = {}

function updateDriverWithKeyAndValue(driver, key ,value){
    return Object.assign({}, driver, { [key]: value });
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver
}
function deleteFromDriverByKey(driver, key){
  return Object.assign({ driver: key })
}

function destructivelyDeleteFromDriverByKey(driver,key){
  driver[key] = undefined
  return driver
}
