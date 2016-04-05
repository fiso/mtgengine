"use strict";
const Constants = require ("../../../Constants");
const DragonBloodBase = require("../setDDL/DragonBlood");

class DragonBlood extends DragonBloodBase {
  constructor(game) {
    super(game, "Dragon Blood", "Urza's Saga", "USG");
  }
}

module.exports = DragonBlood;
