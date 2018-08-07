"use strict";
const Constants = require ("../../../Constants");
const KozilektheGreatDistortionBase = require("../setOGW/KozilektheGreatDistortion");

class KozilektheGreatDistortion extends KozilektheGreatDistortionBase {
  constructor (game) {
    super(game, "Kozilek, the Great Distortion", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = KozilektheGreatDistortion;
