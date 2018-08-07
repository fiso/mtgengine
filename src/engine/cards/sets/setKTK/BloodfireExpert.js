"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodfireExpert extends UnimplementedCard {
  constructor (game) {
    super(game, "Bloodfire Expert", "Khans of Tarkir", "KTK");
  }
}

module.exports = BloodfireExpert;
