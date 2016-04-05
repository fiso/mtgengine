"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KembasLegion extends UnimplementedCard {
  constructor(game) {
    super(game, "Kemba's Legion", "Mirrodin Besieged", "MBS");
  }
}

module.exports = KembasLegion;
