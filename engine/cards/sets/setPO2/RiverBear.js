"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RiverBearBase = require("../set9ED/RiverBear.js");

class RiverBear extends RiverBearBase {
  constructor(game) {
    super(game, "River Bear", "Portal Second Age", "PO2");
  }
}

module.exports = RiverBear;
