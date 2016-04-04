"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TimeDistortion extends Card {
  constructor(game) {
    super(game, "Time Distortion", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = TimeDistortion;
