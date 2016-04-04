"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodsoakedChampion extends UnimplementedCard {
  constructor(game) {
    super(game, "Bloodsoaked Champion", "Khans of Tarkir", "KTK");
  }
}

module.exports = BloodsoakedChampion;
