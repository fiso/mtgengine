"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrontierSiege extends UnimplementedCard {
  constructor (game) {
    super(game, "Frontier Siege", "Fate Reforged", "FRF");
  }
}

module.exports = FrontierSiege;
