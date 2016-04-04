"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeaTroll extends Card {
  constructor(game) {
    super(game, "Sea Troll", "Homelands", "HML");
  }
}

module.exports = SeaTroll;
