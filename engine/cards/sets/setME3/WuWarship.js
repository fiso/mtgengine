"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WuWarship extends Card {
  constructor(game) {
    super(game, "Wu Warship", "Masters Edition III", "ME3");
  }
}

module.exports = WuWarship;
