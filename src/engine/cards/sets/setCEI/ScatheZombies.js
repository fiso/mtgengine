"use strict";
const Constants = require ("../../../Constants");
const ScatheZombiesBase = require("../set10E/ScatheZombies");

class ScatheZombies extends ScatheZombiesBase {
  constructor (game) {
    super(game, "Scathe Zombies", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = ScatheZombies;
