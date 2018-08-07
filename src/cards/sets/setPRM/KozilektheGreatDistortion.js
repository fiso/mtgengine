"use strict";
const Constants = require ("../../../Constants");
const KozilektheGreatDistortionBase = require("../setOGW/KozilektheGreatDistortion");

class KozilektheGreatDistortion extends KozilektheGreatDistortionBase {
  constructor (game) {
    super(game, "Kozilek, the Great Distortion", "Magic Online Promos", "PRM");
  }
}

module.exports = KozilektheGreatDistortion;
