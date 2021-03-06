'use strict';
const Constants = require('../../../Constants');
const ShatterstormBase = require('../setMP2/Shatterstorm');

class Shatterstorm extends ShatterstormBase {
  constructor (game) {
    super(game, 'Shatterstorm', 'Fifth Edition', '5ED');
  }
}

module.exports = Shatterstorm;
