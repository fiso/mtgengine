"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HolyLight extends Card {
  constructor(game) {
    super(game, "Holy Light", "Masters Edition", "MED");
  }
}

module.exports = HolyLight;
