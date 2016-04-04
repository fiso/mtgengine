"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilverSeraph extends UnimplementedCard {
  constructor(game) {
    super(game, "Silver Seraph", "Judgment", "JUD");
  }
}

module.exports = SilverSeraph;
