"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GreelMindRaker extends Card {
  constructor(game) {
    super(game, "Greel, Mind Raker", "Prophecy", "PCY");
  }
}

module.exports = GreelMindRaker;
