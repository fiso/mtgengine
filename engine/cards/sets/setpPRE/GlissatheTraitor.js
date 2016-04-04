"use strict";
const Constants = require ("../../../Constants");
const GlissatheTraitorBase = require("../setMBS/GlissatheTraitor");

class GlissatheTraitor extends GlissatheTraitorBase {
  constructor(game) {
    super(game, "Glissa, the Traitor", "Prerelease Events", "pPRE");
  }
}

module.exports = GlissatheTraitor;
