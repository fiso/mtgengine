"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BygoneBishop extends UnimplementedCard {
  constructor (game) {
    super(game, "Bygone Bishop", "Shadows over Innistrad", "SOI");
  }
}

module.exports = BygoneBishop;
