"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HedonistsTrove extends UnimplementedCard {
  constructor (game) {
    super(game, "Hedonist's Trove", "Dragons of Tarkir", "DTK");
  }
}

module.exports = HedonistsTrove;
