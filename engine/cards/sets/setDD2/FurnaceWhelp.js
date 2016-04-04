"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FurnaceWhelpBase = require("../setARC/FurnaceWhelp.js");

class FurnaceWhelp extends FurnaceWhelpBase {
  constructor(game) {
    super(game, "Furnace Whelp", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = FurnaceWhelp;
