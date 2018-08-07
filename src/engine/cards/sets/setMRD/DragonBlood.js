"use strict";
const Constants = require ("../../../Constants");
const DragonBloodBase = require("../setDDL/DragonBlood");

class DragonBlood extends DragonBloodBase {
  constructor (game) {
    super(game, "Dragon Blood", "Mirrodin", "MRD");
  }
}

module.exports = DragonBlood;
