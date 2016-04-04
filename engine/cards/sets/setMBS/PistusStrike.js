"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PistusStrike extends Card {
  constructor(game) {
    super(game, "Pistus Strike", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PistusStrike;
