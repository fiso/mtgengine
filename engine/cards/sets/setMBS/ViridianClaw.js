"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ViridianClaw extends UnimplementedCard {
  constructor(game) {
    super(game, "Viridian Claw", "Mirrodin Besieged", "MBS");
  }
}

module.exports = ViridianClaw;
