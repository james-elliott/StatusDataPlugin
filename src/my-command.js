const sketch = require('sketch')
const { DataSupplier } = sketch
const util = require('util')

export function onStartup () {
  // To register the plugin, uncomment the relevant type:
  DataSupplier.registerDataSupplier('public.text', 'Account', 'AccountStatus');
  DataSupplier.registerDataSupplier('public.text', 'Rightsizing', 'RightsizingStatus');
  DataSupplier.registerDataSupplier('public.text', 'Agent', 'AgentStatus');
}

export function onShutdown () {
  // Deregister the plugin
  DataSupplier.deregisterDataSuppliers()
}

export function onAccountStatus (context) {
  var dataKey = context.data.key;
  var dataCount = context.data.requestedCount;

  var theData = ['Healthy', 'Healthy', 'Healthy', 'Healthy', 'Unhealthy', 'Warning', 'Warning', 'Unknown', 'Healthy', 'Healthy'];

  // Start the data to be provided at a random position in the array.
  var dynamicData = theData.slice(Math.floor(Math.random() * theData.length));
  dynamicData.push.apply(dynamicData, theData);
  while (dynamicData.length < dataCount) {
    dynamicData.push.apply(dynamicData, theData);
  }

  shuffle(dynamicData);
  dynamicData = dynamicData.slice(0, dataCount);
  var dataIndex = 0;
  while (dataIndex < dataCount) {
    DataSupplier.supplyDataAtIndex(dataKey, dynamicData[dataIndex], dataIndex);
    dataIndex++;
  }
  // DataSupplier.supplyData(dataKey, dynamicData);
}

export function onRightsizingStatus (context) {
  var dataKey = context.data.key;
  var dataCount = context.data.requestedCount;

  var theData = ['Underutilized', 'Underutilized', 'Underutilized', 'Underutilized', 'Underutilized', 'Good Fit', 'Good Fit', 'Good Fit', 'Over Target', 'Over Target'];

  // Start the data to be provided at a random position in the array.
  var dynamicData = theData.slice(Math.floor(Math.random() * theData.length));
  dynamicData.push.apply(dynamicData, theData);
  while (dynamicData.length < dataCount) {
    dynamicData.push.apply(dynamicData, theData);
  }

  shuffle(dynamicData);
  dynamicData = dynamicData.slice(0, dataCount);
  var dataIndex = 0;
  while (dataIndex < dataCount) {
    DataSupplier.supplyDataAtIndex(dataKey, dynamicData[dataIndex], dataIndex);
    dataIndex++;
  }
  // DataSupplier.supplyData(dataKey, dynamicData);
}

export function onAgentStatus (context) {
  var dataKey = context.data.key;
  var dataCount = context.data.requestedCount;

  var theData = ['Ok', 'Ok', 'Ok', 'Ok', 'Ok', 'Late Checkin', 'Late Checkin', 'Late Checkin', 'Late Upload'];

  // Start the data to be provided at a random position in the array.
  var dynamicData = theData.slice(Math.floor(Math.random() * theData.length));
  dynamicData.push.apply(dynamicData, theData);
  while (dynamicData.length < dataCount) {
    dynamicData.push.apply(dynamicData, theData);
  }

  shuffle(dynamicData);
  dynamicData = dynamicData.slice(0, dataCount);
  var dataIndex = 0;
  while (dataIndex < dataCount) {
    DataSupplier.supplyDataAtIndex(dataKey, dynamicData[dataIndex], dataIndex);
    dataIndex++;
  }
  // DataSupplier.supplyData(dataKey, dynamicData);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
