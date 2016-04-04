"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DragonsClawBase = require("../setDST/DragonsClaw.js");

class DragonsClaw extends DragonsClawBase {
  constructor(game) {
    super(game, "Dragon's Claw", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = DragonsClaw;
