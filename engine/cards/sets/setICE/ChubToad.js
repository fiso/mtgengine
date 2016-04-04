"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChubToadBase = require("../set5ED/ChubToad.js");

class ChubToad extends ChubToadBase {
  constructor(game) {
    super(game, "Chub Toad", "Ice Age", "ICE");
  }
}

module.exports = ChubToad;
