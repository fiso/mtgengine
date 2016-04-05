"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlyingCraneTechnique extends UnimplementedCard {
  constructor(game) {
    super(game, "Flying Crane Technique", "Khans of Tarkir", "KTK");
  }
}

module.exports = FlyingCraneTechnique;
