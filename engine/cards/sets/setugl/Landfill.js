"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Landfill extends UnimplementedCard {
  constructor(game) {
    super(game, "Landfill", "Unglued", "UGL");
  }
}

module.exports = Landfill;
