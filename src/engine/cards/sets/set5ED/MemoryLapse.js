'use strict';
const Constants = require('../../../Constants');
const MemoryLapseBase = require('../setEMA/MemoryLapse');

class MemoryLapse extends MemoryLapseBase {
  constructor (game) {
    super(game, 'Memory Lapse', 'Fifth Edition', '5ED');
  }
}

module.exports = MemoryLapse;
