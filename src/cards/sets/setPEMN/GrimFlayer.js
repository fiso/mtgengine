"use strict";
const Constants = require ("../../../Constants");
const GrimFlayerBase = require("../setEMN/GrimFlayer");

class GrimFlayer extends GrimFlayerBase {
  constructor (game) {
    super(game, "Grim Flayer", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = GrimFlayer;
