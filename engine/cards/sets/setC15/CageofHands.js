"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CageofHandsBase = require("../setCHK/CageofHands.js");

class CageofHands extends CageofHandsBase {
  constructor(game) {
    super(game, "Cage of Hands", "Commander 2015", "C15");
  }
}

module.exports = CageofHands;
