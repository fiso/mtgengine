"use strict";
const Constants = require ("../../../Constants");
const HurricaneBase = require("../set10E/Hurricane");

class Hurricane extends HurricaneBase {
  constructor (game) {
    super(game, "Hurricane", "World Championship Decks 1999", "WC99");
  }
}

module.exports = Hurricane;
