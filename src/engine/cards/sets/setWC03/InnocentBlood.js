"use strict";
const Constants = require ("../../../Constants");
const InnocentBloodBase = require("../setE02/InnocentBlood");

class InnocentBlood extends InnocentBloodBase {
  constructor (game) {
    super(game, "Innocent Blood", "World Championship Decks 2003", "WC03");
  }
}

module.exports = InnocentBlood;
