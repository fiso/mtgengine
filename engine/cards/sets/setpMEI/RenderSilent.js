"use strict";
const Constants = require ("../../../Constants");
const RenderSilentBase = require("../setDGM/RenderSilent");

class RenderSilent extends RenderSilentBase {
  constructor(game) {
    super(game, "Render Silent", "Media Inserts", "pMEI");
  }
}

module.exports = RenderSilent;
