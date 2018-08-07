"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildFieldScarecrow extends UnimplementedCard {
  constructor (game) {
    super(game, "Wild-Field Scarecrow", "Shadows over Innistrad", "SOI");
  }
}

module.exports = WildFieldScarecrow;
