"use strict";
const Constants = require ("../../../Constants");
const GloriousAnthemBase = require("../set8ED/GloriousAnthem");

class GloriousAnthem extends GloriousAnthemBase {
  constructor(game) {
    super(game, "Glorious Anthem", "Ninth Edition", "9ED");
  }
}

module.exports = GloriousAnthem;
