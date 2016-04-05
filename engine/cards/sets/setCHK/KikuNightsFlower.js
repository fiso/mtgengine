"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KikuNightsFlower extends UnimplementedCard {
  constructor(game) {
    super(game, "Kiku, Night's Flower", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KikuNightsFlower;
