"use strict";
const Constants = require ("../../../Constants");
const CartographerBase = require("../setEXO/Cartographer");

class Cartographer extends CartographerBase {
  constructor (game) {
    super(game, "Cartographer", "Odyssey", "ODY");
  }
}

module.exports = Cartographer;
