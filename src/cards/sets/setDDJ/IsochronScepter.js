"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IsochronScepter extends UnimplementedCard {
  constructor (game) {
    super(game, "Isochron Scepter", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = IsochronScepter;
