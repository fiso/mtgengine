"use strict";
const Constants = require ("../../../Constants");
const ArcTrailBase = require("../setPCA/ArcTrail");

class ArcTrail extends ArcTrailBase {
  constructor (game) {
    super(game, "Arc Trail", "Planechase 2012", "PC2");
  }
}

module.exports = ArcTrail;
