"use strict";
const Constants = require ("../../../Constants");
const RumblingSlumBase = require("../setHOP/RumblingSlum");

class RumblingSlum extends RumblingSlumBase {
  constructor (game) {
    super(game, "Rumbling Slum", "Guildpact", "GPT");
  }
}

module.exports = RumblingSlum;
