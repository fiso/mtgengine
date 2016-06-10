"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhastlyHaunting extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghastly Haunting", "Dark Ascension", "DKA");
  }
}

module.exports = GhastlyHaunting;
