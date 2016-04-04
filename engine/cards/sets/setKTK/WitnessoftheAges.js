"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WitnessoftheAges extends Card {
  constructor(game) {
    super(game, "Witness of the Ages", "Khans of Tarkir", "KTK");
  }
}

module.exports = WitnessoftheAges;
