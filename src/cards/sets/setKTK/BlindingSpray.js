"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlindingSpray extends UnimplementedCard {
  constructor (game) {
    super(game, "Blinding Spray", "Khans of Tarkir", "KTK");
  }
}

module.exports = BlindingSpray;
