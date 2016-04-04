"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ViridianClaw extends Card {
  constructor(game) {
    super(game, "Viridian Claw", "Mirrodin Besieged", "MBS");
  }
}

module.exports = ViridianClaw;
