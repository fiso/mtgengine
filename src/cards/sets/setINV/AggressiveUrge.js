"use strict";
const Constants = require ("../../../Constants");
const AggressiveUrgeBase = require("../setRIX/AggressiveUrge");

class AggressiveUrge extends AggressiveUrgeBase {
  constructor (game) {
    super(game, "Aggressive Urge", "Invasion", "INV");
  }
}

module.exports = AggressiveUrge;
