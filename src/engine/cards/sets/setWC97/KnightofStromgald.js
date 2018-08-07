"use strict";
const Constants = require ("../../../Constants");
const KnightofStromgaldBase = require("../setME2/KnightofStromgald");

class KnightofStromgald extends KnightofStromgaldBase {
  constructor (game) {
    super(game, "Knight of Stromgald", "World Championship Decks 1997", "WC97");
  }
}

module.exports = KnightofStromgald;
