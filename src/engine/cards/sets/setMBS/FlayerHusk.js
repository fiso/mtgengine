"use strict";
const Constants = require ("../../../Constants");
const FlayerHuskBase = require("../setPCA/FlayerHusk");

class FlayerHusk extends FlayerHuskBase {
  constructor (game) {
    super(game, "Flayer Husk", "Mirrodin Besieged", "MBS");
  }
}

module.exports = FlayerHusk;
