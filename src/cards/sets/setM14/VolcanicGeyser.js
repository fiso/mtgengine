"use strict";
const Constants = require ("../../../Constants");
const VolcanicGeyserBase = require("../set6ED/VolcanicGeyser");

class VolcanicGeyser extends VolcanicGeyserBase {
  constructor(game) {
    super(game, "Volcanic Geyser", "Magic 2014 Core Set", "M14");
  }
}

module.exports = VolcanicGeyser;
