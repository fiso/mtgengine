"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConfronttheAssault extends UnimplementedCard {
  constructor (game) {
    super(game, "Confront the Assault", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = ConfronttheAssault;
