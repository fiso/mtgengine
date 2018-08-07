"use strict";
const Constants = require ("../../../Constants");
const CapsizeBase = require("../setMP2/Capsize");

class Capsize extends CapsizeBase {
  constructor (game) {
    super(game, "Capsize", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = Capsize;
