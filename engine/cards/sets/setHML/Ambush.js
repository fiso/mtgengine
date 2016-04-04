"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ambush extends Card {
  constructor(game) {
    super(game, "Ambush", "Homelands", "HML");
  }
}

module.exports = Ambush;
