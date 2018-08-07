"use strict";
const Constants = require ("../../../Constants");
const ObliterateBase = require("../setV16/Obliterate");

class Obliterate extends ObliterateBase {
  constructor (game) {
    super(game, "Obliterate", "Eighth Edition", "8ED");
  }
}

module.exports = Obliterate;
