"use strict";
const Constants = require ("../../../Constants");
const VolcanicGeyserBase = require("../set6ED/VolcanicGeyser");

class VolcanicGeyser extends VolcanicGeyserBase {
  constructor (game) {
    super(game, "Volcanic Geyser", "Magic 2013", "M13");
  }
}

module.exports = VolcanicGeyser;
