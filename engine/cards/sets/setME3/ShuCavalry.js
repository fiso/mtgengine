"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShuCavalry extends UnimplementedCard {
  constructor(game) {
    super(game, "Shu Cavalry", "Masters Edition III", "ME3");
  }
}

module.exports = ShuCavalry;
