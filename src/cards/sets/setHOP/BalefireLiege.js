"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalefireLiege extends UnimplementedCard {
  constructor (game) {
    super(game, "Balefire Liege", "Planechase", "HOP");
  }
}

module.exports = BalefireLiege;
