"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TawnossCoffinBase = require("../setATQ/TawnossCoffin.js");

class TawnossCoffin extends TawnossCoffinBase {
  constructor(game) {
    super(game, "Tawnos's Coffin", "Masters Edition", "MED");
  }
}

module.exports = TawnossCoffin;
