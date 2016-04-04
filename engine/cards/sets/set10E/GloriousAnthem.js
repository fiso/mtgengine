"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GloriousAnthemBase = require("../set8ED/GloriousAnthem.js");

class GloriousAnthem extends GloriousAnthemBase {
  constructor(game) {
    super(game, "Glorious Anthem", "Tenth Edition", "10E");
  }
}

module.exports = GloriousAnthem;
