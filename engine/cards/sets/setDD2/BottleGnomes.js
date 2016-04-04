"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BottleGnomesBase = require("../setC14/BottleGnomes.js");

class BottleGnomes extends BottleGnomesBase {
  constructor(game) {
    super(game, "Bottle Gnomes", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = BottleGnomes;
