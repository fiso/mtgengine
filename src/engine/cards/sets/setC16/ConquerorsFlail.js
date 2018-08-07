"use strict";
const Constants = require ("../../../Constants");
const ConquerorsFlailBase = require("../setPZ2/ConquerorsFlail");

class ConquerorsFlail extends ConquerorsFlailBase {
  constructor (game) {
    super(game, "Conqueror's Flail", "Commander 2016", "C16");
  }
}

module.exports = ConquerorsFlail;
