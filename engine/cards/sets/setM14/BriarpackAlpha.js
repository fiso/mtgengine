"use strict";
const Constants = require ("../../../Constants");
const BriarpackAlphaBase = require("../setDKA/BriarpackAlpha");

class BriarpackAlpha extends BriarpackAlphaBase {
  constructor(game) {
    super(game, "Briarpack Alpha", "Magic 2014 Core Set", "M14");
  }
}

module.exports = BriarpackAlpha;
