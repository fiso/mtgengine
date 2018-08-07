"use strict";
const Constants = require ("../../../Constants");
const RakdosCarnariumBase = require("../setC18/RakdosCarnarium");

class RakdosCarnarium extends RakdosCarnariumBase {
  constructor (game) {
    super(game, "Rakdos Carnarium", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = RakdosCarnarium;
