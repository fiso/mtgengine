"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Kurgadon extends UnimplementedCard {
  constructor(game) {
    super(game, "Kurgadon", "Scourge", "SCG");
  }
}

module.exports = Kurgadon;
