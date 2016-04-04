"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NettlingImpBase = require("../setCED/NettlingImp.js");

class NettlingImp extends NettlingImpBase {
  constructor(game) {
    super(game, "Nettling Imp", "Revised Edition", "3ED");
  }
}

module.exports = NettlingImp;
