"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SaguArcher extends UnimplementedCard {
  constructor(game) {
    super(game, "Sagu Archer", "Khans of Tarkir", "KTK");
  }
}

module.exports = SaguArcher;
