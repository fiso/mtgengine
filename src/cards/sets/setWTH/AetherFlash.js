"use strict";
const Constants = require ("../../../Constants");
const AetherFlashBase = require("../set7ED/AetherFlash");

class AetherFlash extends AetherFlashBase {
  constructor (game) {
    super(game, "Aether Flash", "Weatherlight", "WTH");
  }
}

module.exports = AetherFlash;
