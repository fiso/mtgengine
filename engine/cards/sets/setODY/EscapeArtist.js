"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EscapeArtist extends Card {
  constructor(game) {
    super(game, "Escape Artist", "Odyssey", "ODY");
  }
}

module.exports = EscapeArtist;
