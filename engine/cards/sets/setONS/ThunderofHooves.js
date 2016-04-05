"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThunderofHooves extends UnimplementedCard {
  constructor(game) {
    super(game, "Thunder of Hooves", "Onslaught", "ONS");
  }
}

module.exports = ThunderofHooves;
