"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NaturalSelectionBase = require("../setCED/NaturalSelection.js");

class NaturalSelection extends NaturalSelectionBase {
  constructor(game) {
    super(game, "Natural Selection", "International Collector's Edition", "CEI");
  }
}

module.exports = NaturalSelection;
