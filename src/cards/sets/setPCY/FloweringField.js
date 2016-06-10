"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FloweringField extends UnimplementedCard {
  constructor (game) {
    super(game, "Flowering Field", "Prophecy", "PCY");
  }
}

module.exports = FloweringField;
