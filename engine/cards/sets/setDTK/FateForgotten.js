"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FateForgotten extends UnimplementedCard {
  constructor(game) {
    super(game, "Fate Forgotten", "Dragons of Tarkir", "DTK");
  }
}

module.exports = FateForgotten;
