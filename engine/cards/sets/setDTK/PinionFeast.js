"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PinionFeast extends UnimplementedCard {
  constructor(game) {
    super(game, "Pinion Feast", "Dragons of Tarkir", "DTK");
  }
}

module.exports = PinionFeast;
