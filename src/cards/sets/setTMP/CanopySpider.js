"use strict";
const Constants = require ("../../../Constants");
const CanopySpiderBase = require("../setBBD/CanopySpider");

class CanopySpider extends CanopySpiderBase {
  constructor (game) {
    super(game, "Canopy Spider", "Tempest", "TMP");
  }
}

module.exports = CanopySpider;
