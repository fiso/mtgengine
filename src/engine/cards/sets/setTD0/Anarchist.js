"use strict";
const Constants = require ("../../../Constants");
const AnarchistBase = require("../setTPR/Anarchist");

class Anarchist extends AnarchistBase {
  constructor (game) {
    super(game, "Anarchist", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = Anarchist;
