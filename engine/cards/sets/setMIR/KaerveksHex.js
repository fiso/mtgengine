"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KaerveksHex extends UnimplementedCard {
  constructor(game) {
    super(game, "Kaervek's Hex", "Mirage", "MIR");
  }
}

module.exports = KaerveksHex;
