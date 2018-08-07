"use strict";
const Constants = require ("../../../Constants");
const GemstoneMineBase = require("../setTSB/GemstoneMine");

class GemstoneMine extends GemstoneMineBase {
  constructor (game) {
    super(game, "Gemstone Mine", "World Championship Decks 1997", "WC97");
  }
}

module.exports = GemstoneMine;
