"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VertigoSpawn extends UnimplementedCard {
  constructor(game) {
    super(game, "Vertigo Spawn", "Guildpact", "GPT");
  }
}

module.exports = VertigoSpawn;
