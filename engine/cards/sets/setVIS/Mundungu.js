"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mundungu extends UnimplementedCard {
  constructor(game) {
    super(game, "Mundungu", "Visions", "VIS");
  }
}

module.exports = Mundungu;
