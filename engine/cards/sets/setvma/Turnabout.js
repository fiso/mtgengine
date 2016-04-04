"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TurnaboutBase = require("../setpMEI/Turnabout.js");

class Turnabout extends TurnaboutBase {
  constructor(game) {
    super(game, "Turnabout", "Vintage Masters", "VMA");
  }
}

module.exports = Turnabout;
