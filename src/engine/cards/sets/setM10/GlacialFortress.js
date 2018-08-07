"use strict";
const Constants = require ("../../../Constants");
const GlacialFortressBase = require("../setXLN/GlacialFortress");

class GlacialFortress extends GlacialFortressBase {
  constructor (game) {
    super(game, "Glacial Fortress", "Magic 2010", "M10");
  }
}

module.exports = GlacialFortress;
