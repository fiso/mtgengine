"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlingBase = require("../setpARL/Fling.js");

class Fling extends FlingBase {
  constructor(game) {
    super(game, "Fling", "WPN and Gateway", "pWPN");
  }
}

module.exports = Fling;
