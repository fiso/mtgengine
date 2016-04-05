"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ghostfire extends UnimplementedCard {
  constructor(game) {
    super(game, "Ghostfire", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = Ghostfire;
