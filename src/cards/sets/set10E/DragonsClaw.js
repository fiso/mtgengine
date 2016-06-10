"use strict";
const Constants = require ("../../../Constants");
const DragonsClawBase = require("../setDST/DragonsClaw");

class DragonsClaw extends DragonsClawBase {
  constructor (game) {
    super(game, "Dragon's Claw", "Tenth Edition", "10E");
  }
}

module.exports = DragonsClaw;
