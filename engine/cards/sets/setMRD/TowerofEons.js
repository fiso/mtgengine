"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TowerofEons extends Card {
  constructor(game) {
    super(game, "Tower of Eons", "Mirrodin", "MRD");
  }
}

module.exports = TowerofEons;
