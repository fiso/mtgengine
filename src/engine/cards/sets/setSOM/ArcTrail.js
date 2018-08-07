"use strict";
const Constants = require ("../../../Constants");
const ArcTrailBase = require("../setPCA/ArcTrail");

class ArcTrail extends ArcTrailBase {
  constructor (game) {
    super(game, "Arc Trail", "Scars of Mirrodin", "SOM");
  }
}

module.exports = ArcTrail;
