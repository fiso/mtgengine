'use strict';
const Constants = require('../../../Constants');
const TaigaBase = require('../setVMA/Taiga');

class Taiga extends TaigaBase {
  constructor (game) {
    super(game, 'Taiga', 'Unlimited Edition', '2ED');
  }
}

module.exports = Taiga;
