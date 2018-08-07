"use strict";
const Constants = require ("../../../Constants");
const HuntingPackBase = require("../setIMA/HuntingPack");

class HuntingPack extends HuntingPackBase {
  constructor (game) {
    super(game, "Hunting Pack", "World Championship Decks 2003", "WC03");
  }
}

module.exports = HuntingPack;
