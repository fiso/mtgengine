'use strict';
const Constants = require('../../../Constants');
const SerraAngelBase = require('../setMTGA/SerraAngel');

class SerraAngel extends SerraAngelBase {
  constructor (game) {
    super(game, 'Serra Angel', 'Revised Edition', '3ED');
  }
}

module.exports = SerraAngel;
