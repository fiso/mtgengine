"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlingBase = require("../setpARL/Fling.js");

class Fling extends FlingBase {
  constructor(game) {
    super(game, "Fling", "Magic 2011", "M11");
  }
}

module.exports = Fling;
