"use strict";
const Constants = require ("../../../Constants");
const CartographerBase = require("../setODY/Cartographer");

class Cartographer extends CartographerBase {
  constructor (game) {
    super(game, "Cartographer", "Exodus", "EXO");
  }
}

module.exports = Cartographer;
