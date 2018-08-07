"use strict";
const Constants = require ("../../../Constants");
const MadProphetBase = require("../setSOI/MadProphet");

class MadProphet extends MadProphetBase {
  constructor (game) {
    super(game, "Mad Prophet", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = MadProphet;
