"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WheelofFortune extends Card {
  constructor(game) {
    super(game, "Wheel of Fortune", "Collector's Edition", "CED");
  }
}

module.exports = WheelofFortune;
