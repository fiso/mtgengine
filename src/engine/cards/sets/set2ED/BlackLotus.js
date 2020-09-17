'use strict';
const BlackLotusBase = require('../setVMA/BlackLotus');

class BlackLotus extends BlackLotusBase {
  constructor (game) {
    super(game, 'Black Lotus', 'Unlimited Edition', '2ED');
  }
}

module.exports = BlackLotus;
