"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PersecuteArtist extends UnimplementedCard {
  constructor (game) {
    super(game, "Persecute Artist", "Unhinged", "UNH");
  }
}

module.exports = PersecuteArtist;
