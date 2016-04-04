"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RenderSilentBase = require("../setDGM/RenderSilent.js");

class RenderSilent extends RenderSilentBase {
  constructor(game) {
    super(game, "Render Silent", "Media Inserts", "pMEI");
  }
}

module.exports = RenderSilent;
