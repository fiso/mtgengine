"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimidDrake extends UnimplementedCard {
  constructor (game) {
    super(game, "Timid Drake", "Mercadian Masques", "MMQ");
  }
}

module.exports = TimidDrake;
