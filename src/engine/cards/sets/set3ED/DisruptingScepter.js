'use strict';
const Constants = require('../../../Constants');
const DisruptingScepterBase = require('../set9ED/DisruptingScepter');

class DisruptingScepter extends DisruptingScepterBase {
  constructor (game) {
    super(game, 'Disrupting Scepter', 'Revised Edition', '3ED');
  }
}

module.exports = DisruptingScepter;
