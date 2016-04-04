"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArcTrailBase = require("../setDDN/ArcTrail.js");

class ArcTrail extends ArcTrailBase {
  constructor(game) {
    super(game, "Arc Trail", "Scars of Mirrodin", "SOM");
  }
}

module.exports = ArcTrail;
