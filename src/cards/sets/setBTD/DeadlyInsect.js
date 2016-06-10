"use strict";
const Constants = require ("../../../Constants");
const DeadlyInsectBase = require("../setALL/DeadlyInsect");

class DeadlyInsect extends DeadlyInsectBase {
  constructor (game) {
    super(game, "Deadly Insect", "Beatdown Box Set", "BTD");
  }
}

module.exports = DeadlyInsect;
