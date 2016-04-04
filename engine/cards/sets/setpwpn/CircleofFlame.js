"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CircleofFlameBase = require("../setM12/CircleofFlame.js");

class CircleofFlame extends CircleofFlameBase {
  constructor(game) {
    super(game, "Circle of Flame", "WPN and Gateway", "pWPN");
  }
}

module.exports = CircleofFlame;
