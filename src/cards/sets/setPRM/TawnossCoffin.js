"use strict";
const Constants = require ("../../../Constants");
const TawnossCoffinBase = require("../setMED/TawnossCoffin");

class TawnossCoffin extends TawnossCoffinBase {
  constructor (game) {
    super(game, "Tawnos's Coffin", "Magic Online Promos", "PRM");
  }
}

module.exports = TawnossCoffin;
