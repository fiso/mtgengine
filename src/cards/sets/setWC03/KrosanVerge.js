"use strict";
const Constants = require ("../../../Constants");
const KrosanVergeBase = require("../setC18/KrosanVerge");

class KrosanVerge extends KrosanVergeBase {
  constructor (game) {
    super(game, "Krosan Verge", "World Championship Decks 2003", "WC03");
  }
}

module.exports = KrosanVerge;
