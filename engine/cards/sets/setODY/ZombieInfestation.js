"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ZombieInfestationBase = require("../setARC/ZombieInfestation.js");

class ZombieInfestation extends ZombieInfestationBase {
  constructor(game) {
    super(game, "Zombie Infestation", "Odyssey", "ODY");
  }
}

module.exports = ZombieInfestation;
