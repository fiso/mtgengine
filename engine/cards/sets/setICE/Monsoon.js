"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Monsoon extends Card {
  constructor(game) {
    super(game, "Monsoon", "Ice Age", "ICE");
  }
}

module.exports = Monsoon;
