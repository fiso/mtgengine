"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarbarianGuides extends UnimplementedCard {
  constructor(game) {
    super(game, "Barbarian Guides", "Ice Age", "ICE");
  }
}

module.exports = BarbarianGuides;
