"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NinthePainArtist extends Card {
  constructor(game) {
    super(game, "Nin, the Pain Artist", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = NinthePainArtist;
