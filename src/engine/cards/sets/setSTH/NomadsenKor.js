"use strict";
const Constants = require ("../../../Constants");
const NomadsenKorBase = require("../setTPR/NomadsenKor");

class NomadsenKor extends NomadsenKorBase {
  constructor (game) {
    super(game, "Nomads en-Kor", "Stronghold", "STH");
  }
}

module.exports = NomadsenKor;
