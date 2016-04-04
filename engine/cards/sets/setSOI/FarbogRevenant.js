"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FarbogRevenant extends UnimplementedCard {
  constructor(game) {
    super(game, "Farbog Revenant", "Shadows over Innistrad", "SOI");
  }
}

module.exports = FarbogRevenant;
