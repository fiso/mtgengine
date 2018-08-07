'use strict';
const Constants = require('../../../Constants');
const KudzuBase = require('../setME4/Kudzu');

class Kudzu extends KudzuBase {
  constructor (game) {
    super(game, 'Kudzu', 'Unlimited Edition', '2ED');
  }
}

module.exports = Kudzu;
