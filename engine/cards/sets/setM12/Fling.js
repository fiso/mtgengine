"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlingBase = require("../setpARL/Fling.js");

class Fling extends FlingBase {
  constructor(game) {
    super(game, "Fling", "Magic 2012", "M12");
  }
}

module.exports = Fling;
