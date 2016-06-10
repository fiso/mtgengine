"use strict";
const Constants = require ("../../../Constants");
const ScatheZombiesBase = require("../set6ED/ScatheZombies");

class ScatheZombies extends ScatheZombiesBase {
  constructor (game) {
    super(game, "Scathe Zombies", "Limited Edition Alpha", "LEA");
  }
}

module.exports = ScatheZombies;
