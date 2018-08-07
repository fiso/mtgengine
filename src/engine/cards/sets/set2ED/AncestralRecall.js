'use strict';
const AncestralRecallBase = require('../setVMA/AncestralRecall');

class AncestralRecall extends AncestralRecallBase {
  constructor (game) {
    super(game, 'Ancestral Recall', 'Unlimited Edition', '2ED');
  }
}

module.exports = AncestralRecall;
