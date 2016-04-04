"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShivanHellkite extends Card {
  constructor(game) {
    super(game, "Shivan Hellkite", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = ShivanHellkite;
