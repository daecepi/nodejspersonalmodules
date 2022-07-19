const EventEmitter = require('events').EventEmitter;
const utils = require('util');
/**
 * Emitter in charge of making calls to event every second
 */
const Clock = function(){
  const self = this;
  setInterval(function(){
    self.emit('second-passed')
  },1000)
}

utils.inherits(Clock, EventEmitter);

module.exports = Clock;