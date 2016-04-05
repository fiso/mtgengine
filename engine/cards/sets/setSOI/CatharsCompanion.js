"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CatharsCompanion extends UnimplementedCard {
  constructor(game) {
    super(game, "Cathar's Companion", "Shadows over Innistrad", "SOI");
  }
}

module.exports = CatharsCompanion;
