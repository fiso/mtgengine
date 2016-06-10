"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PristineSkywise extends UnimplementedCard {
  constructor (game) {
    super(game, "Pristine Skywise", "Dragons of Tarkir", "DTK");
  }
}

module.exports = PristineSkywise;
