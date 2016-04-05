"use strict";
const Constants = require ("../../../Constants");
const GluttonousSlimeBase = require("../setCON/GluttonousSlime");

class GluttonousSlime extends GluttonousSlimeBase {
  constructor(game) {
    super(game, "Gluttonous Slime", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = GluttonousSlime;
