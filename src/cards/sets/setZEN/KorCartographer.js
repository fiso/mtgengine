"use strict";
const Constants = require ("../../../Constants");
const KorCartographerBase = require("../setDDI/KorCartographer");

class KorCartographer extends KorCartographerBase {
  constructor (game) {
    super(game, "Kor Cartographer", "Zendikar", "ZEN");
  }
}

module.exports = KorCartographer;
