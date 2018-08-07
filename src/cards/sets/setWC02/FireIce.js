"use strict";
const Constants = require ("../../../Constants");
const FireIceBase = require("../setDDJ/FireIce");

class FireIce extends FireIceBase {
  constructor (game) {
    super(game, "Fire // Ice", "World Championship Decks 2002", "WC02");
  }
}

module.exports = FireIce;
