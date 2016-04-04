"use strict";
const Constants = require ("../../../Constants");
const GutShotBase = require("../setMM2/GutShot");

class GutShot extends GutShotBase {
  constructor(game) {
    super(game, "Gut Shot", "New Phyrexia", "NPH");
  }
}

module.exports = GutShot;
