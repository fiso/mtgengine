"use strict";
const Constants = require ("../../../Constants");
const GushBase = require("../setJVC/Gush");

class Gush extends GushBase {
  constructor (game) {
    super(game, "Gush", "World Championship Decks 2001", "WC01");
  }
}

module.exports = Gush;
