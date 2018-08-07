'use strict';
const Constants = require('../../../Constants');
const SerraAngelBase = require('../setMTGA/SerraAngel');

class SerraAngel extends SerraAngelBase {
  constructor (game) {
    super(game, 'Serra Angel', 'Fourth Edition', '4ED');
  }
}

module.exports = SerraAngel;
