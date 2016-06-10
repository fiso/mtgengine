"use strict";
const Constants = require ("../../../Constants");
const AetherAdeptBase = require("../setDDM/AetherAdept");

class AetherAdept extends AetherAdeptBase {
  constructor (game) {
    super(game, "Æther Adept", "Magic 2011", "M11");
  }
}

module.exports = AetherAdept;
