"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZhalfirinCommander extends UnimplementedCard {
  constructor(game) {
    super(game, "Zhalfirin Commander", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = ZhalfirinCommander;
