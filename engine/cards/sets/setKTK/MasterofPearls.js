"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasterofPearls extends UnimplementedCard {
  constructor(game) {
    super(game, "Master of Pearls", "Khans of Tarkir", "KTK");
  }
}

module.exports = MasterofPearls;
