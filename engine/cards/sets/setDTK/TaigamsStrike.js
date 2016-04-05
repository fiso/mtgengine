"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TaigamsStrike extends UnimplementedCard {
  constructor(game) {
    super(game, "Taigam's Strike", "Dragons of Tarkir", "DTK");
  }
}

module.exports = TaigamsStrike;
