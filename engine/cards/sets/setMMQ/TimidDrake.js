"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TimidDrake extends Card {
  constructor(game) {
    super(game, "Timid Drake", "Mercadian Masques", "MMQ");
  }
}

module.exports = TimidDrake;
