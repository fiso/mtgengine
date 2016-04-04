"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TurntoFrogBase = require("../setC14/TurntoFrog.js");

class TurntoFrog extends TurntoFrogBase {
  constructor(game) {
    super(game, "Turn to Frog", "Magic Origins", "ORI");
  }
}

module.exports = TurntoFrog;
