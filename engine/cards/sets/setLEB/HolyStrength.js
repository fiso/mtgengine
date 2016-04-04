"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HolyStrengthBase = require("../setCED/HolyStrength.js");

class HolyStrength extends HolyStrengthBase {
  constructor(game) {
    super(game, "Holy Strength", "Limited Edition Beta", "LEB");
  }
}

module.exports = HolyStrength;
