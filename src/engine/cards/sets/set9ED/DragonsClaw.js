"use strict";
const Constants = require ("../../../Constants");
const DragonsClawBase = require("../setM12/DragonsClaw");

class DragonsClaw extends DragonsClawBase {
  constructor (game) {
    super(game, "Dragon's Claw", "Ninth Edition", "9ED");
  }
}

module.exports = DragonsClaw;
