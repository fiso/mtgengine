"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FloweringField extends Card {
  constructor(game) {
    super(game, "Flowering Field", "Prophecy", "PCY");
  }
}

module.exports = FloweringField;
