"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HolyStrength extends Card {
  constructor(game) {
    super(game, "Holy Strength", "Collector's Edition", "CED");
  }
}

module.exports = HolyStrength;
