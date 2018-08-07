"use strict";
const Constants = require ("../../../Constants");
const EvernightShadeBase = require("../setC14/EvernightShade");

class EvernightShade extends EvernightShadeBase {
  constructor (game) {
    super(game, "Evernight Shade", "Avacyn Restored", "AVR");
  }
}

module.exports = EvernightShade;
