"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EarthSurge extends Card {
  constructor(game) {
    super(game, "Earth Surge", "Guildpact", "GPT");
  }
}

module.exports = EarthSurge;
