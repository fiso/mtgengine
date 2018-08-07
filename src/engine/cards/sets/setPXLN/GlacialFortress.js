"use strict";
const Constants = require ("../../../Constants");
const GlacialFortressBase = require("../setXLN/GlacialFortress");

class GlacialFortress extends GlacialFortressBase {
  constructor (game) {
    super(game, "Glacial Fortress", "Ixalan Promos", "PXLN");
  }
}

module.exports = GlacialFortress;
