"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathsCaress extends Card {
  constructor(game) {
    super(game, "Death's Caress", "Dark Ascension", "DKA");
  }
}

module.exports = DeathsCaress;
