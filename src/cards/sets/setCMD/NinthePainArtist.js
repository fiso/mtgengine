"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NinthePainArtist extends UnimplementedCard {
  constructor (game) {
    super(game, "Nin, the Pain Artist", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = NinthePainArtist;
