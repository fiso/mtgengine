"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarnivorousPlant extends UnimplementedCard {
  constructor (game) {
    super(game, "Carnivorous Plant", "Anthologies", "ATH");
  }
}

module.exports = CarnivorousPlant;
