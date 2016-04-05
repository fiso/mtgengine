"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FurnaceScamp extends UnimplementedCard {
  constructor(game) {
    super(game, "Furnace Scamp", "New Phyrexia", "NPH");
  }
}

module.exports = FurnaceScamp;
