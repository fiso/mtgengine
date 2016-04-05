"use strict";
const Constants = require ("../../../Constants");
const GloriousAnthemBase = require("../set8ED/GloriousAnthem");

class GloriousAnthem extends GloriousAnthemBase {
  constructor(game) {
    super(game, "Glorious Anthem", "Urza's Saga", "USG");
  }
}

module.exports = GloriousAnthem;
