"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KnighthoodBase = require("../set7ED/Knighthood.js");

class Knighthood extends KnighthoodBase {
  constructor(game) {
    super(game, "Knighthood", "Urza's Legacy", "ULG");
  }
}

module.exports = Knighthood;
