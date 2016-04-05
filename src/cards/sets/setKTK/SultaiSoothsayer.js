"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SultaiSoothsayer extends UnimplementedCard {
  constructor(game) {
    super(game, "Sultai Soothsayer", "Khans of Tarkir", "KTK");
  }
}

module.exports = SultaiSoothsayer;
