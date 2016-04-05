"use strict";
const Constants = require ("../../../Constants");
const KnighthoodBase = require("../set7ED/Knighthood");

class Knighthood extends KnighthoodBase {
  constructor(game) {
    super(game, "Knighthood", "Urza's Legacy", "ULG");
  }
}

module.exports = Knighthood;
