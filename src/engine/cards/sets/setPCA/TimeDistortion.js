"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimeDistortion extends UnimplementedCard {
  constructor (game) {
    super(game, "Time Distortion", "Planechase Anthology", "PCA");
  }
}

module.exports = TimeDistortion;
