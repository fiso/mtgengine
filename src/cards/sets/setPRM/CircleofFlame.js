"use strict";
const Constants = require ("../../../Constants");
const CircleofFlameBase = require("../setM15/CircleofFlame");

class CircleofFlame extends CircleofFlameBase {
  constructor (game) {
    super(game, "Circle of Flame", "Magic Online Promos", "PRM");
  }
}

module.exports = CircleofFlame;
