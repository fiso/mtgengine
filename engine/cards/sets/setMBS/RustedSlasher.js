"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RustedSlasher extends UnimplementedCard {
  constructor(game) {
    super(game, "Rusted Slasher", "Mirrodin Besieged", "MBS");
  }
}

module.exports = RustedSlasher;
