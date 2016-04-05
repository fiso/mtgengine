"use strict";
const Constants = require ("../../../Constants");
const TawnossCoffinBase = require("../setATQ/TawnossCoffin");

class TawnossCoffin extends TawnossCoffinBase {
  constructor(game) {
    super(game, "Tawnos's Coffin", "Masters Edition", "MED");
  }
}

module.exports = TawnossCoffin;
