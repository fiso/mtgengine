"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VoroshtheHunter extends Card {
  constructor(game) {
    super(game, "Vorosh, the Hunter", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = VoroshtheHunter;
