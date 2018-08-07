"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NinthePainArtist extends UnimplementedCard {
  constructor (game) {
    super(game, "Nin, the Pain Artist", "Judge Gift Cards 2018", "J18");
  }
}

module.exports = NinthePainArtist;
