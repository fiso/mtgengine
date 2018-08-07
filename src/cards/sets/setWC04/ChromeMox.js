"use strict";
const Constants = require ("../../../Constants");
const ChromeMoxBase = require("../setMPS/ChromeMox");

class ChromeMox extends ChromeMoxBase {
  constructor (game) {
    super(game, "Chrome Mox", "World Championship Decks 2004", "WC04");
  }
}

module.exports = ChromeMox;
