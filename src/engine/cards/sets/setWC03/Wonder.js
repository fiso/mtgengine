"use strict";
const Constants = require ("../../../Constants");
const WonderBase = require("../setCM2/Wonder");

class Wonder extends WonderBase {
  constructor (game) {
    super(game, "Wonder", "World Championship Decks 2003", "WC03");
  }
}

module.exports = Wonder;
