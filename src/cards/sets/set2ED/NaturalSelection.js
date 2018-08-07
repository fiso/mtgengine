"use strict";
const Constants = require ("../../../Constants");
const NaturalSelectionBase = require("../setCEI/NaturalSelection");

class NaturalSelection extends NaturalSelectionBase {
  constructor (game) {
    super(game, "Natural Selection", "Unlimited Edition", "2ED");
  }
}

module.exports = NaturalSelection;
