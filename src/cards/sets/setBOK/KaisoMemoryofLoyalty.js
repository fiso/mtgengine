"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KaisoMemoryofLoyalty extends UnimplementedCard {
  constructor(game) {
    super(game, "Kaiso, Memory of Loyalty", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = KaisoMemoryofLoyalty;
