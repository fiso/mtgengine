'use strict';
const Constants = require('../../../Constants');
const ClockworkBeastBase = require('../setMED/ClockworkBeast');

class ClockworkBeast extends ClockworkBeastBase {
  constructor (game) {
    super(game, 'Clockwork Beast', 'Fourth Edition', '4ED');
  }
}

module.exports = ClockworkBeast;
