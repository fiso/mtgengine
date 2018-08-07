"use strict";
const Constants = require ("../../../Constants");
const AetherFlashBase = require("../set7ED/AetherFlash");

class AetherFlash extends AetherFlashBase {
  constructor (game) {
    super(game, "Aether Flash", "Classic Sixth Edition", "6ED");
  }
}

module.exports = AetherFlash;
