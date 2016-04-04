"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SengirVampireBase = require("../setBRB/SengirVampire.js");

class SengirVampire extends SengirVampireBase {
  constructor(game) {
    super(game, "Sengir Vampire", "Magic 2015 Core Set", "M15");
  }
}

module.exports = SengirVampire;
