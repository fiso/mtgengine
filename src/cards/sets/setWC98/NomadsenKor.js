"use strict";
const Constants = require ("../../../Constants");
const NomadsenKorBase = require("../setTPR/NomadsenKor");

class NomadsenKor extends NomadsenKorBase {
  constructor (game) {
    super(game, "Nomads en-Kor", "World Championship Decks 1998", "WC98");
  }
}

module.exports = NomadsenKor;
