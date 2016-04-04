"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShiningShoal extends Card {
  constructor(game) {
    super(game, "Shining Shoal", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = ShiningShoal;
