"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MastersCall extends UnimplementedCard {
  constructor(game) {
    super(game, "Master's Call", "Mirrodin Besieged", "MBS");
  }
}

module.exports = MastersCall;
