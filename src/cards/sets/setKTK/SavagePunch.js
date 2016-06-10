"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SavagePunch extends UnimplementedCard {
  constructor (game) {
    super(game, "Savage Punch", "Khans of Tarkir", "KTK");
  }
}

module.exports = SavagePunch;
