'use strict';
const Constants = require('../../../Constants');
const ChaoslaceBase = require('../set4ED/Chaoslace');

class Chaoslace extends ChaoslaceBase {
  constructor (game) {
    super(game, 'Chaoslace', 'Revised Edition', '3ED');
  }
}

module.exports = Chaoslace;
