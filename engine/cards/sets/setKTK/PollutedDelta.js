"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PollutedDeltaBase = require("../setpJGP/PollutedDelta.js");

class PollutedDelta extends PollutedDeltaBase {
  constructor(game) {
    super(game, "Polluted Delta", "Khans of Tarkir", "KTK");
  }
}

module.exports = PollutedDelta;
