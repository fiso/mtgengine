"use strict";
const Constants = require ("../../../Constants");
const MillennialGargoyleBase = require("../setBBD/MillennialGargoyle");

class MillennialGargoyle extends MillennialGargoyleBase {
  constructor (game) {
    super(game, "Millennial Gargoyle", "Gatecrash", "GTC");
  }
}

module.exports = MillennialGargoyle;
