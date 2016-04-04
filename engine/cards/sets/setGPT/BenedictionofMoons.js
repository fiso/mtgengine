"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BenedictionofMoons extends Card {
  constructor(game) {
    super(game, "Benediction of Moons", "Guildpact", "GPT");
  }
}

module.exports = BenedictionofMoons;
