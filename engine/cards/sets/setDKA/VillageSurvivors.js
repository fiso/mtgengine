"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VillageSurvivors extends Card {
  constructor(game) {
    super(game, "Village Survivors", "Dark Ascension", "DKA");
  }
}

module.exports = VillageSurvivors;
