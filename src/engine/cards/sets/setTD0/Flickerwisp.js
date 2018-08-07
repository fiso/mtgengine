"use strict";
const Constants = require ("../../../Constants");
const FlickerwispBase = require("../setE01/Flickerwisp");

class Flickerwisp extends FlickerwispBase {
  constructor (game) {
    super(game, "Flickerwisp", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = Flickerwisp;
