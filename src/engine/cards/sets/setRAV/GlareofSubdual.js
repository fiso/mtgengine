"use strict";
const Constants = require ("../../../Constants");
const GlareofSubdualBase = require("../setEMA/GlareofSubdual");

class GlareofSubdual extends GlareofSubdualBase {
  constructor (game) {
    super(game, "Glare of Subdual", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GlareofSubdual;
