"use strict";
const Constants = require ("../../../Constants");
const ScatheZombiesBase = require("../set6ED/ScatheZombies");

class ScatheZombies extends ScatheZombiesBase {
  constructor (game) {
    super(game, "Scathe Zombies", "Unlimited Edition", "2ED");
  }
}

module.exports = ScatheZombies;
