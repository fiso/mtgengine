"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeismicStrike extends UnimplementedCard {
  constructor (game) {
    super(game, "Seismic Strike", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = SeismicStrike;
