"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IncitedRabble extends UnimplementedCard {
  constructor(game) {
    super(game, "Incited Rabble", "Shadows over Innistrad", "SOI");
  }
}

module.exports = IncitedRabble;
