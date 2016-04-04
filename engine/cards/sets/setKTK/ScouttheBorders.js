"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScouttheBorders extends UnimplementedCard {
  constructor(game) {
    super(game, "Scout the Borders", "Khans of Tarkir", "KTK");
  }
}

module.exports = ScouttheBorders;
