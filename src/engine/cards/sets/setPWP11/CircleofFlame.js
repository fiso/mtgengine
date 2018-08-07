"use strict";
const Constants = require ("../../../Constants");
const CircleofFlameBase = require("../setM15/CircleofFlame");

class CircleofFlame extends CircleofFlameBase {
  constructor (game) {
    super(game, "Circle of Flame", "Wizards Play Network 2011", "PWP11");
  }
}

module.exports = CircleofFlame;
