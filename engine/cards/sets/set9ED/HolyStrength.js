"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HolyStrengthBase = require("../setCED/HolyStrength.js");

class HolyStrength extends HolyStrengthBase {
  constructor(game) {
    super(game, "Holy Strength", "Ninth Edition", "9ED");
  }
}

module.exports = HolyStrength;
