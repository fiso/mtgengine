"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SternConstable extends UnimplementedCard {
  constructor (game) {
    super(game, "Stern Constable", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SternConstable;
