"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BattleRampartBase = require("../setMMQ/BattleRampart.js");

class BattleRampart extends BattleRampartBase {
  constructor(game) {
    super(game, "Battle Rampart", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = BattleRampart;
