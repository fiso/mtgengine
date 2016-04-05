"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScaleBlessing extends UnimplementedCard {
  constructor(game) {
    super(game, "Scale Blessing", "Dragons of Tarkir", "DTK");
  }
}

module.exports = ScaleBlessing;
