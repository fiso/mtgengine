"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DragonBloodBase = require("../setDDL/DragonBlood.js");

class DragonBlood extends DragonBloodBase {
  constructor(game) {
    super(game, "Dragon Blood", "Urza's Saga", "USG");
  }
}

module.exports = DragonBlood;
