'use strict';
const Constants = require('../../../Constants');
const RocofKherRidgesBase = require('../setME4/RocofKherRidges');

class RocofKherRidges extends RocofKherRidgesBase {
  constructor (game) {
    super(game, 'Roc of Kher Ridges', 'Revised Edition', '3ED');
  }
}

module.exports = RocofKherRidges;
