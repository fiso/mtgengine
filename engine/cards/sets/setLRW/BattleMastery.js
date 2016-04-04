"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BattleMasteryBase = require("../setDTK/BattleMastery.js");

class BattleMastery extends BattleMasteryBase {
  constructor(game) {
    super(game, "Battle Mastery", "Lorwyn", "LRW");
  }
}

module.exports = BattleMastery;
