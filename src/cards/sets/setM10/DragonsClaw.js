"use strict";
const Constants = require ("../../../Constants");
const DragonsClawBase = require("../setM12/DragonsClaw");

class DragonsClaw extends DragonsClawBase {
  constructor (game) {
    super(game, "Dragon's Claw", "Magic 2010", "M10");
  }
}

module.exports = DragonsClaw;
