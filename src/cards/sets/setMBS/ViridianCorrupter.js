"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ViridianCorrupter extends UnimplementedCard {
  constructor (game) {
    super(game, "Viridian Corrupter", "Mirrodin Besieged", "MBS");
  }
}

module.exports = ViridianCorrupter;
