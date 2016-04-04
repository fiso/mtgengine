"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DragonsClawBase = require("../setDST/DragonsClaw.js");

class DragonsClaw extends DragonsClawBase {
  constructor(game) {
    super(game, "Dragon's Claw", "Magic 2011", "M11");
  }
}

module.exports = DragonsClaw;
