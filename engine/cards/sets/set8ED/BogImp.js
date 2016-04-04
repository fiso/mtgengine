"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BogImpBase = require("../set6ED/BogImp.js");

class BogImp extends BogImpBase {
  constructor(game) {
    super(game, "Bog Imp", "Eighth Edition", "8ED");
  }
}

module.exports = BogImp;
