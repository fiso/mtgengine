"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimeStretch extends UnimplementedCard {
  constructor (game) {
    super(game, "Time Stretch", "Tenth Edition", "10E");
  }
}

module.exports = TimeStretch;
