'use strict';
const Constants = require('../../../Constants');
const MindTwistBase = require('../setMP2/MindTwist');

class MindTwist extends MindTwistBase {
  constructor (game) {
    super(game, 'Mind Twist', 'Unlimited Edition', '2ED');
  }
}

module.exports = MindTwist;
