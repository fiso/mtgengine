"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StratusWalkBase = require("../setBNG/StratusWalk.js");

class StratusWalk extends StratusWalkBase {
  constructor(game) {
    super(game, "Stratus Walk", "Magic Origins", "ORI");
  }
}

module.exports = StratusWalk;
