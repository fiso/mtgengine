'use strict';
const Constants = require('../../../Constants');
const SerraAngelBase = require('../setMTGA/SerraAngel');

class SerraAngel extends SerraAngelBase {
  constructor (game) {
    super(game, 'Serra Angel', 'Unlimited Edition', '2ED');
  }
}

module.exports = SerraAngel;
