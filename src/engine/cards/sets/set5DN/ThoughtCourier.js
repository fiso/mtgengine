'use strict';
const Constants = require('../../../Constants');
const ThoughtCourierBase = require('../set9ED/ThoughtCourier');

class ThoughtCourier extends ThoughtCourierBase {
  constructor (game) {
    super(game, 'Thought Courier', 'Fifth Dawn', '5DN');
  }
}

module.exports = ThoughtCourier;
