"use strict";
const Constants = require ("../../../Constants");
const GluttonousSlimeBase = require("../setPCA/GluttonousSlime");

class GluttonousSlime extends GluttonousSlimeBase {
  constructor (game) {
    super(game, "Gluttonous Slime", "Planechase 2012", "PC2");
  }
}

module.exports = GluttonousSlime;
