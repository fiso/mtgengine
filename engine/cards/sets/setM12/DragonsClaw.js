"use strict";
const Constants = require ("../../../Constants");
const DragonsClawBase = require("../setDST/DragonsClaw");

class DragonsClaw extends DragonsClawBase {
  constructor(game) {
    super(game, "Dragon's Claw", "Magic 2012", "M12");
  }
}

module.exports = DragonsClaw;
