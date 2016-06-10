"use strict";
const Constants = require ("../../../Constants");
const GraspofDarknessBase = require("../setOGW/GraspofDarkness");

class GraspofDarkness extends GraspofDarknessBase {
  constructor (game) {
    super(game, "Grasp of Darkness", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GraspofDarkness;
