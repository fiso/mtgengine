"use strict";
const Constants = require ("../../../Constants");
const DragonsClawBase = require("../setM12/DragonsClaw");

class DragonsClaw extends DragonsClawBase {
  constructor (game) {
    super(game, "Dragon's Claw", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = DragonsClaw;
