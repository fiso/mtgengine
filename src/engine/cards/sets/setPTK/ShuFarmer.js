"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShuFarmer extends UnimplementedCard {
  constructor (game) {
    super(game, "Shu Farmer", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ShuFarmer;
