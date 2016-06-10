"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodKnight extends UnimplementedCard {
  constructor (game) {
    super(game, "Blood Knight", "Champs and States", "pCMP");
  }
}

module.exports = BloodKnight;
