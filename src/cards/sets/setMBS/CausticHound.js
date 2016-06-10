"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CausticHound extends UnimplementedCard {
  constructor (game) {
    super(game, "Caustic Hound", "Mirrodin Besieged", "MBS");
  }
}

module.exports = CausticHound;
