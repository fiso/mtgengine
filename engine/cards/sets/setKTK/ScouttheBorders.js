"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScouttheBorders extends Card {
  constructor(game) {
    super(game, "Scout the Borders", "Khans of Tarkir", "KTK");
  }
}

module.exports = ScouttheBorders;
