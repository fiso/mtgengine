"use strict";
const Constants = require ("../../../Constants");
const EvernightShadeBase = require("../setAVR/EvernightShade");

class EvernightShade extends EvernightShadeBase {
  constructor(game) {
    super(game, "Evernight Shade", "Commander 2014", "C14");
  }
}

module.exports = EvernightShade;
