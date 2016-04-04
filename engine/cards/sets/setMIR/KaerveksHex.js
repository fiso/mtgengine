"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KaerveksHex extends Card {
  constructor(game) {
    super(game, "Kaervek's Hex", "Mirage", "MIR");
  }
}

module.exports = KaerveksHex;
