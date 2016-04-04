"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IsochronScepter extends Card {
  constructor(game) {
    super(game, "Isochron Scepter", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = IsochronScepter;
