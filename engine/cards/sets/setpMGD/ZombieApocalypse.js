"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ZombieApocalypseBase = require("../setDKA/ZombieApocalypse.js");

class ZombieApocalypse extends ZombieApocalypseBase {
  constructor(game) {
    super(game, "Zombie Apocalypse", "Magic Game Day", "pMGD");
  }
}

module.exports = ZombieApocalypse;
