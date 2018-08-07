'use strict';
const Constants = require('../../../Constants');
const MindTwistBase = require('../setMP2/MindTwist');

class MindTwist extends MindTwistBase {
  constructor (game) {
    super(game, 'Mind Twist', 'Fourth Edition', '4ED');
  }
}

module.exports = MindTwist;
