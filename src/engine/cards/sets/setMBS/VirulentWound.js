"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VirulentWound extends UnimplementedCard {
  constructor (game) {
    super(game, "Virulent Wound", "Mirrodin Besieged", "MBS");
  }
}

module.exports = VirulentWound;
