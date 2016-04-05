"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarefulStudy extends UnimplementedCard {
  constructor(game) {
    super(game, "Careful Study", "Odyssey", "ODY");
  }
}

module.exports = CarefulStudy;
