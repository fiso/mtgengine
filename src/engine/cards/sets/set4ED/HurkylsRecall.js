'use strict';
const Constants = require('../../../Constants');
const HurkylsRecallBase = require('../setMM2/HurkylsRecall');

class HurkylsRecall extends HurkylsRecallBase {
  constructor (game) {
    super(game, "Hurkyl's Recall", 'Fourth Edition', '4ED');
  }
}

module.exports = HurkylsRecall;
