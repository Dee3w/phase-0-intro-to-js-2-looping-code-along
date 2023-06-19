// Code your solutions in this file
const assert = require('assert');

function writeCards(names) {
    let messages = [];
  
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
  
    return messages;
  }
  
  let expected = [
    "Thank you, Guadalupe, for the wonderful surprise gift!",
    "Thank you, Ollie, for the wonderful surprise gift!",
    "Thank you, Aki, for the wonderful surprise gift!"
  ];
  
  let actual = writeCards(['Guadalupe', 'Ollie', 'Aki']);
  
  assert.deepEqual(actual, expected);


  function countDown(num) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  }
  const { expect } = require('chai');

describe('countDown', function() {
  let logOutput;

  before(function() {
    // Override console.log to capture the output
    logOutput = [];
    const originalConsoleLog = console.log;
    console.log = function(...args) {
      logOutput.push(...args);
    };
  });

  after(function() {
    // Restore console.log to its original implementation
    console.log = originalConsoleLog;
  });

  it('invokes console.log once for each number, counting down from the number provided to zero', function() {
    countDown(5);
    expect(logOutput.length).to.equal(6); // 5 numbers + 0
  });

  it('logs each number when counting down, starting from the number provided', function() {
    countDown(3);
    expect(logOutput).to.deep.equal(['3', '2', '1', '0']);
  });
});


  
