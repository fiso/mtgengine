"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShivanHellkite extends UnimplementedCard {
  constructor(game) {
    super(game, "Shivan Hellkite", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = ShivanHellkite;
