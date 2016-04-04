"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FieryConclusionBase = require("../setORI/FieryConclusion.js");

class FieryConclusion extends FieryConclusionBase {
  constructor(game) {
    super(game, "Fiery Conclusion", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = FieryConclusion;
