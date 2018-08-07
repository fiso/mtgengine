"use strict";
const Constants = require ("../../../Constants");
const AtarkaWorldRenderBase = require("../setC17/AtarkaWorldRender");

class AtarkaWorldRender extends AtarkaWorldRenderBase {
  constructor (game) {
    super(game, "Atarka, World Render", "Fate Reforged", "FRF");
  }
}

module.exports = AtarkaWorldRender;
