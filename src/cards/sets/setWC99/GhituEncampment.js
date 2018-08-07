"use strict";
const Constants = require ("../../../Constants");
const GhituEncampmentBase = require("../setDDN/GhituEncampment");

class GhituEncampment extends GhituEncampmentBase {
  constructor (game) {
    super(game, "Ghitu Encampment", "World Championship Decks 1999", "WC99");
  }
}

module.exports = GhituEncampment;
