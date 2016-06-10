"use strict";
const Constants = require ("../../../Constants");
const GlacialFortressBase = require("../setM10/GlacialFortress");

class GlacialFortress extends GlacialFortressBase {
  constructor (game) {
    super(game, "Glacial Fortress", "Magic 2013", "M13");
  }
}

module.exports = GlacialFortress;
