"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZealousGuardian extends Card {
  constructor(game) {
    super(game, "Zealous Guardian", "Shadowmoor", "SHM");
  }
}

module.exports = ZealousGuardian;
