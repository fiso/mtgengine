"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BringLow extends UnimplementedCard {
  constructor(game) {
    super(game, "Bring Low", "Khans of Tarkir", "KTK");
  }
}

module.exports = BringLow;
