"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GreedBase = require("../set6ED/Greed.js");

class Greed extends GreedBase {
  constructor(game) {
    super(game, "Greed", "Legends", "LEG");
  }
}

module.exports = Greed;
