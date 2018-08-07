"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SignalPest extends UnimplementedCard {
  constructor (game) {
    super(game, "Signal Pest", "Mirrodin Besieged", "MBS");
  }
}

module.exports = SignalPest;
