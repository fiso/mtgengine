"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WitnessoftheAges extends UnimplementedCard {
  constructor(game) {
    super(game, "Witness of the Ages", "Khans of Tarkir", "KTK");
  }
}

module.exports = WitnessoftheAges;
