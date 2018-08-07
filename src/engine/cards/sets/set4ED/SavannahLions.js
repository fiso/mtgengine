'use strict';
const Constants = require('../../../Constants');
const SavannahLionsBase = require('../setA25/SavannahLions');

class SavannahLions extends SavannahLionsBase {
  constructor (game) {
    super(game, 'Savannah Lions', 'Fourth Edition', '4ED');
  }
}

module.exports = SavannahLions;
