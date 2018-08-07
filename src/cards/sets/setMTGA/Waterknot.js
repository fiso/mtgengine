"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Waterknot extends UnimplementedCard {
  constructor (game) {
    super(game, "Waterknot", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = Waterknot;
