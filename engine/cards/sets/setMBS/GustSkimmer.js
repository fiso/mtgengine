"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GustSkimmer extends Card {
  constructor(game) {
    super(game, "Gust-Skimmer", "Mirrodin Besieged", "MBS");
  }
}

module.exports = GustSkimmer;
