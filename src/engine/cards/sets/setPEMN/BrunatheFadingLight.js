"use strict";
const Constants = require ("../../../Constants");
const BrunatheFadingLightBase = require("../setV17/BrunatheFadingLight");

class BrunatheFadingLight extends BrunatheFadingLightBase {
  constructor (game) {
    super(game, "Bruna, the Fading Light", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = BrunatheFadingLight;
