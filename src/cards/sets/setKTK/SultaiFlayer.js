"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SultaiFlayer extends UnimplementedCard {
  constructor(game) {
    super(game, "Sultai Flayer", "Khans of Tarkir", "KTK");
  }
}

module.exports = SultaiFlayer;
