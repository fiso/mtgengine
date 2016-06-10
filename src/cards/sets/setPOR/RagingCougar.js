"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RagingCougar extends UnimplementedCard {
  constructor (game) {
    super(game, "Raging Cougar", "Portal", "POR");
  }
}

module.exports = RagingCougar;
