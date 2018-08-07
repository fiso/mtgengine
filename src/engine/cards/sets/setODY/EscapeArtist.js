"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EscapeArtist extends UnimplementedCard {
  constructor (game) {
    super(game, "Escape Artist", "Odyssey", "ODY");
  }
}

module.exports = EscapeArtist;
