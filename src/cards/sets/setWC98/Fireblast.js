"use strict";
const Constants = require ("../../../Constants");
const FireblastBase = require("../setJVC/Fireblast");

class Fireblast extends FireblastBase {
  constructor (game) {
    super(game, "Fireblast", "World Championship Decks 1998", "WC98");
  }
}

module.exports = Fireblast;
