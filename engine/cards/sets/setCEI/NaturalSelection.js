"use strict";
const Constants = require ("../../../Constants");
const NaturalSelectionBase = require("../setCED/NaturalSelection");

class NaturalSelection extends NaturalSelectionBase {
  constructor(game) {
    super(game, "Natural Selection", "International Collector's Edition", "CEI");
  }
}

module.exports = NaturalSelection;
