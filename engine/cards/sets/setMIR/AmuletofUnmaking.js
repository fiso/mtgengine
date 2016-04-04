"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AmuletofUnmaking extends UnimplementedCard {
  constructor(game) {
    super(game, "Amulet of Unmaking", "Mirage", "MIR");
  }
}

module.exports = AmuletofUnmaking;
