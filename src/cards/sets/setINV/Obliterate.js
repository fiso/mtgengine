"use strict";
const Constants = require ("../../../Constants");
const ObliterateBase = require("../set8ED/Obliterate");

class Obliterate extends ObliterateBase {
  constructor(game) {
    super(game, "Obliterate", "Invasion", "INV");
  }
}

module.exports = Obliterate;
