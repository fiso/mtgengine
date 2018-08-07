"use strict";
const Constants = require ("../../../Constants");
const AetherAdeptBase = require("../setDDM/AetherAdept");

class AetherAdept extends AetherAdeptBase {
  constructor (game) {
    super(game, "Aether Adept", "Magic 2012", "M12");
  }
}

module.exports = AetherAdept;
