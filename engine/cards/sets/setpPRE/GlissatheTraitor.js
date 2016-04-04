"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GlissatheTraitorBase = require("../setMBS/GlissatheTraitor.js");

class GlissatheTraitor extends GlissatheTraitorBase {
  constructor(game) {
    super(game, "Glissa, the Traitor", "Prerelease Events", "pPRE");
  }
}

module.exports = GlissatheTraitor;
