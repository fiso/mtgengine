'use strict';
const Constants = require('../../../Constants');
const SavannahLionsBase = require('../setA25/SavannahLions');

class SavannahLions extends SavannahLionsBase {
  constructor (game) {
    super(game, 'Savannah Lions', 'Revised Edition', '3ED');
  }
}

module.exports = SavannahLions;
