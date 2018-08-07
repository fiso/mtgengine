'use strict';
const Constants = require('../../../Constants');
const RemoveSoulBase = require('../setME3/RemoveSoul');

class RemoveSoul extends RemoveSoulBase {
  constructor (game) {
    super(game, 'Remove Soul', 'Fifth Edition', '5ED');
  }
}

module.exports = RemoveSoul;
