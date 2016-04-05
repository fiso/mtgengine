"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RevealingWind extends UnimplementedCard {
  constructor(game) {
    super(game, "Revealing Wind", "Dragons of Tarkir", "DTK");
  }
}

module.exports = RevealingWind;
