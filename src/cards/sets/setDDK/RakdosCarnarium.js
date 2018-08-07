"use strict";
const Constants = require ("../../../Constants");
const RakdosCarnariumBase = require("../setC18/RakdosCarnarium");

class RakdosCarnarium extends RakdosCarnariumBase {
  constructor (game) {
    super(game, "Rakdos Carnarium", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = RakdosCarnarium;
