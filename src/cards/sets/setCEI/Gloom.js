"use strict";
const Constants = require ("../../../Constants");
const GloomBase = require("../setCED/Gloom");

class Gloom extends GloomBase {
  constructor (game) {
    super(game, "Gloom", "International Collector's Edition", "CEI");
  }
}

module.exports = Gloom;
