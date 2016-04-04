"use strict";
const Constants = require ("../../../Constants");
const ScatheZombiesBase = require("../set6ED/ScatheZombies");

class ScatheZombies extends ScatheZombiesBase {
  constructor(game) {
    super(game, "Scathe Zombies", "Tenth Edition", "10E");
  }
}

module.exports = ScatheZombies;
