"use strict";
const Constants = require ("../../../Constants");
const AetherFlashBase = require("../set6ED/AetherFlash");

class AetherFlash extends AetherFlashBase {
  constructor(game) {
    super(game, "Æther Flash", "Weatherlight", "WTH");
  }
}

module.exports = AetherFlash;
