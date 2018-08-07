"use strict";
const Constants = require ("../../../Constants");
const FireIceBase = require("../setDDJ/FireIce");

class FireIce extends FireIceBase {
  constructor (game) {
    super(game, "Fire // Ice", "World Championship Decks 2001", "WC01");
  }
}

module.exports = FireIce;
