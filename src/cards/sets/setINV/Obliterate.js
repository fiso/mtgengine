"use strict";
const Constants = require ("../../../Constants");
const ObliterateBase = require("../setV16/Obliterate");

class Obliterate extends ObliterateBase {
  constructor (game) {
    super(game, "Obliterate", "Invasion", "INV");
  }
}

module.exports = Obliterate;
