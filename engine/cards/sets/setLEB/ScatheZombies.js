"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScatheZombiesBase = require("../set6ED/ScatheZombies.js");

class ScatheZombies extends ScatheZombiesBase {
  constructor(game) {
    super(game, "Scathe Zombies", "Limited Edition Beta", "LEB");
  }
}

module.exports = ScatheZombies;
