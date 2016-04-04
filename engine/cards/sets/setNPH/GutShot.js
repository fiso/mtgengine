"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GutShotBase = require("../setMM2/GutShot.js");

class GutShot extends GutShotBase {
  constructor(game) {
    super(game, "Gut Shot", "New Phyrexia", "NPH");
  }
}

module.exports = GutShot;
