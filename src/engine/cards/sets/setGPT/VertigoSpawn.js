"use strict";
const Constants = require ("../../../Constants");
const VertigoSpawnBase = require("../setCN2/VertigoSpawn");

class VertigoSpawn extends VertigoSpawnBase {
  constructor (game) {
    super(game, "Vertigo Spawn", "Guildpact", "GPT");
  }
}

module.exports = VertigoSpawn;
