"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BanishingKnack extends UnimplementedCard {
  constructor (game) {
    super(game, "Banishing Knack", "Eventide", "EVE");
  }
}

module.exports = BanishingKnack;
