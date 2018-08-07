"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LensofClarity extends UnimplementedCard {
  constructor (game) {
    super(game, "Lens of Clarity", "Khans of Tarkir", "KTK");
  }
}

module.exports = LensofClarity;
