"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalefireLiege extends UnimplementedCard {
  constructor(game) {
    super(game, "Balefire Liege", "Eventide", "EVE");
  }
}

module.exports = BalefireLiege;
