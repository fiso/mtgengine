"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RockBasilisk extends UnimplementedCard {
  constructor (game) {
    super(game, "Rock Basilisk", "Mirage", "MIR");
  }
}

module.exports = RockBasilisk;
