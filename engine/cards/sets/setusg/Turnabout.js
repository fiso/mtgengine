"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TurnaboutBase = require("../setpMEI/Turnabout.js");

class Turnabout extends TurnaboutBase {
  constructor(game) {
    super(game, "Turnabout", "Urza's Saga", "USG");
  }
}

module.exports = Turnabout;
