"use strict";
const Constants = require ("../../../Constants");
const AislingLeprechaunBase = require("../setPRM/AislingLeprechaun");

class AislingLeprechaun extends AislingLeprechaunBase {
  constructor (game) {
    super(game, "Aisling Leprechaun", "Legends", "LEG");
  }
}

module.exports = AislingLeprechaun;
