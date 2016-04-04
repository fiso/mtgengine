"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeathsDuetBase = require("../setEXO/DeathsDuet.js");

class DeathsDuet extends DeathsDuetBase {
  constructor(game) {
    super(game, "Death's Duet", "Tempest Remastered", "TPR");
  }
}

module.exports = DeathsDuet;
