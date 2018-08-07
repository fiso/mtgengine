"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KaerveksPurge extends UnimplementedCard {
  constructor (game) {
    super(game, "Kaervek's Purge", "Mirage", "MIR");
  }
}

module.exports = KaerveksPurge;
