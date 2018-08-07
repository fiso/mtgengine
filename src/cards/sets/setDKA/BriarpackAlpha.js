"use strict";
const Constants = require ("../../../Constants");
const BriarpackAlphaBase = require("../setM14/BriarpackAlpha");

class BriarpackAlpha extends BriarpackAlphaBase {
  constructor (game) {
    super(game, "Briarpack Alpha", "Dark Ascension", "DKA");
  }
}

module.exports = BriarpackAlpha;
