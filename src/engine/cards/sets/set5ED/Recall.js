'use strict';
const Constants = require('../../../Constants');
const RecallBase = require('../setME3/Recall');

class Recall extends RecallBase {
  constructor (game) {
    super(game, 'Recall', 'Fifth Edition', '5ED');
  }
}

module.exports = Recall;
