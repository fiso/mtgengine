"use strict";
const Constants = require ("../../../Constants");
const LanceBase = require("../setCED/Lance");

class Lance extends LanceBase {
  constructor(game) {
    super(game, "Lance", "International Collector's Edition", "CEI");
  }
}

module.exports = Lance;
