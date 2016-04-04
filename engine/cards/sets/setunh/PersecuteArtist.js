"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PersecuteArtist extends Card {
  constructor(game) {
    super(game, "Persecute Artist", "Unhinged", "UNH");
  }
}

module.exports = PersecuteArtist;
