"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimeDistortion extends UnimplementedCard {
  constructor (game) {
    super(game, "Time Distortion", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = TimeDistortion;
