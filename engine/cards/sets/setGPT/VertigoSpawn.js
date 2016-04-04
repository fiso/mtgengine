"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VertigoSpawn extends Card {
  constructor(game) {
    super(game, "Vertigo Spawn", "Guildpact", "GPT");
  }
}

module.exports = VertigoSpawn;
