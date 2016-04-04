"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Strandwalker extends Card {
  constructor(game) {
    super(game, "Strandwalker", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Strandwalker;
