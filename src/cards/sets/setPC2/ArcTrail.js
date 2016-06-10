"use strict";
const Constants = require ("../../../Constants");
const ArcTrailBase = require("../setDDN/ArcTrail");

class ArcTrail extends ArcTrailBase {
  constructor (game) {
    super(game, "Arc Trail", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = ArcTrail;
