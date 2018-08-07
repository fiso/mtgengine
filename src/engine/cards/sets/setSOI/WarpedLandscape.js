"use strict";
const Constants = require ("../../../Constants");
const WarpedLandscapeBase = require("../setC18/WarpedLandscape");

class WarpedLandscape extends WarpedLandscapeBase {
  constructor (game) {
    super(game, "Warped Landscape", "Shadows over Innistrad", "SOI");
  }
}

module.exports = WarpedLandscape;
