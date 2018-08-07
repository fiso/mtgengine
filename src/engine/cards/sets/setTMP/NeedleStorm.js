"use strict";
const Constants = require ("../../../Constants");
const NeedleStormBase = require("../setTPR/NeedleStorm");

class NeedleStorm extends NeedleStormBase {
  constructor (game) {
    super(game, "Needle Storm", "Tempest", "TMP");
  }
}

module.exports = NeedleStorm;
