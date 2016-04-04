"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeadlyInsectBase = require("../setALL/DeadlyInsect.js");

class DeadlyInsect extends DeadlyInsectBase {
  constructor(game) {
    super(game, "Deadly Insect", "Beatdown Box Set", "BTD");
  }
}

module.exports = DeadlyInsect;
