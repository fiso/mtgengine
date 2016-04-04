"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CoffinQueenBase = require("../setTMP/CoffinQueen.js");

class CoffinQueen extends CoffinQueenBase {
  constructor(game) {
    super(game, "Coffin Queen", "Tempest Remastered", "TPR");
  }
}

module.exports = CoffinQueen;
