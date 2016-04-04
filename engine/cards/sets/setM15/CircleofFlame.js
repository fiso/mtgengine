"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CircleofFlameBase = require("../setM12/CircleofFlame.js");

class CircleofFlame extends CircleofFlameBase {
  constructor(game) {
    super(game, "Circle of Flame", "Magic 2015 Core Set", "M15");
  }
}

module.exports = CircleofFlame;
