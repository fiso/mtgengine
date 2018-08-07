'use strict';
const Constants = require('../../../Constants');
const ClockworkBeastBase = require('../setMED/ClockworkBeast');

class ClockworkBeast extends ClockworkBeastBase {
  constructor (game) {
    super(game, 'Clockwork Beast', 'Revised Edition', '3ED');
  }
}

module.exports = ClockworkBeast;
