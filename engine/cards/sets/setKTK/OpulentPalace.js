"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OpulentPalace extends UnimplementedCard {
  constructor(game) {
    super(game, "Opulent Palace", "Khans of Tarkir", "KTK");
  }
}

module.exports = OpulentPalace;
