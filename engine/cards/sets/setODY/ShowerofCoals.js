"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShowerofCoals extends UnimplementedCard {
  constructor(game) {
    super(game, "Shower of Coals", "Odyssey", "ODY");
  }
}

module.exports = ShowerofCoals;
