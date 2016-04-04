"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Renewal extends Card {
  constructor(game) {
    super(game, "Renewal", "Homelands", "HML");
  }
}

module.exports = Renewal;
