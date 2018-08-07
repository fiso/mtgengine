"use strict";
const Constants = require ("../../../Constants");
const AyeshaTanakaBase = require("../setCHR/AyeshaTanaka");

class AyeshaTanaka extends AyeshaTanakaBase {
  constructor (game) {
    super(game, "Ayesha Tanaka", "Legends", "LEG");
  }
}

module.exports = AyeshaTanaka;
