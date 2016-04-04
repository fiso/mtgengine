"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GloriousAnthemBase = require("../set8ED/GloriousAnthem.js");

class GloriousAnthem extends GloriousAnthemBase {
  constructor(game) {
    super(game, "Glorious Anthem", "Seventh Edition", "7ED");
  }
}

module.exports = GloriousAnthem;
