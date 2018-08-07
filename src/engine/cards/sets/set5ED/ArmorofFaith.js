'use strict';
const Constants = require('../../../Constants');
const ArmorofFaithBase = require('../setME2/ArmorofFaith');

class ArmorofFaith extends ArmorofFaithBase {
  constructor (game) {
    super(game, 'Armor of Faith', 'Fifth Edition', '5ED');
  }
}

module.exports = ArmorofFaith;
