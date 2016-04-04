"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SepticRats extends Card {
  constructor(game) {
    super(game, "Septic Rats", "Mirrodin Besieged", "MBS");
  }
}

module.exports = SepticRats;
