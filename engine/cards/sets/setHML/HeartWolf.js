"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeartWolf extends Card {
  constructor(game) {
    super(game, "Heart Wolf", "Homelands", "HML");
  }
}

module.exports = HeartWolf;
