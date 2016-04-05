"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EverAfter extends UnimplementedCard {
  constructor(game) {
    super(game, "Ever After", "Shadows over Innistrad", "SOI");
  }
}

module.exports = EverAfter;
