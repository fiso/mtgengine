"use strict";
const Constants = require ("../../../Constants");
const GemstoneMineBase = require("../setTSB/GemstoneMine");

class GemstoneMine extends GemstoneMineBase {
  constructor (game) {
    super(game, "Gemstone Mine", "World Championship Decks 1998", "WC98");
  }
}

module.exports = GemstoneMine;
