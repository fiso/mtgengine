"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZhalfirinCommander extends Card {
  constructor(game) {
    super(game, "Zhalfirin Commander", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = ZhalfirinCommander;
