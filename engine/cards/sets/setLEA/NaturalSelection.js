"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NaturalSelectionBase = require("../setCED/NaturalSelection.js");

class NaturalSelection extends NaturalSelectionBase {
  constructor(game) {
    super(game, "Natural Selection", "Limited Edition Alpha", "LEA");
  }
}

module.exports = NaturalSelection;
