"use strict";
const Constants = require ("../../../Constants");
const GlissatheTraitorBase = require("../setV16/GlissatheTraitor");

class GlissatheTraitor extends GlissatheTraitorBase {
  constructor (game) {
    super(game, "Glissa, the Traitor", "Commander's Arsenal Oversized", "OCM1");
  }
}

module.exports = GlissatheTraitor;
