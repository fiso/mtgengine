"use strict";
const Constants = require ("../../../Constants");
const CockatriceBase = require("../setCED/Cockatrice");

class Cockatrice extends CockatriceBase {
  constructor(game) {
    super(game, "Cockatrice", "International Collector's Edition", "CEI");
  }
}

module.exports = Cockatrice;
