"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HardenedScales extends UnimplementedCard {
  constructor(game) {
    super(game, "Hardened Scales", "Khans of Tarkir", "KTK");
  }
}

module.exports = HardenedScales;
