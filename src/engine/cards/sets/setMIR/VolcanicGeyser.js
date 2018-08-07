"use strict";
const Constants = require ("../../../Constants");
const VolcanicGeyserBase = require("../setE01/VolcanicGeyser");

class VolcanicGeyser extends VolcanicGeyserBase {
  constructor (game) {
    super(game, "Volcanic Geyser", "Mirage", "MIR");
  }
}

module.exports = VolcanicGeyser;
