"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MesaChicken extends UnimplementedCard {
  constructor (game) {
    super(game, "Mesa Chicken", "Unglued", "UGL");
  }
}

module.exports = MesaChicken;
