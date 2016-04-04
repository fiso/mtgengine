"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ContestedWarZone extends Card {
  constructor(game) {
    super(game, "Contested War Zone", "Mirrodin Besieged", "MBS");
  }
}

module.exports = ContestedWarZone;
