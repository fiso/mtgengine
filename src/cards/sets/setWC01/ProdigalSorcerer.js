"use strict";
const Constants = require ("../../../Constants");
const ProdigalSorcererBase = require("../setEMA/ProdigalSorcerer");

class ProdigalSorcerer extends ProdigalSorcererBase {
  constructor (game) {
    super(game, "Prodigal Sorcerer", "World Championship Decks 2001", "WC01");
  }
}

module.exports = ProdigalSorcerer;
