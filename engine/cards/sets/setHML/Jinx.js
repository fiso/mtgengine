"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Jinx extends Card {
  constructor(game) {
    super(game, "Jinx", "Homelands", "HML");
  }
}

module.exports = Jinx;
