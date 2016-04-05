"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SingingBellStrike extends UnimplementedCard {
  constructor(game) {
    super(game, "Singing Bell Strike", "Khans of Tarkir", "KTK");
  }
}

module.exports = SingingBellStrike;
