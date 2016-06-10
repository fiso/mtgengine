"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArtfulLooter extends UnimplementedCard {
  constructor (game) {
    super(game, "Artful Looter", "Unhinged", "UNH");
  }
}

module.exports = ArtfulLooter;
