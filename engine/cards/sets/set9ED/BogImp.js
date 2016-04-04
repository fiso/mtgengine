"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BogImpBase = require("../set6ED/BogImp.js");

class BogImp extends BogImpBase {
  constructor(game) {
    super(game, "Bog Imp", "Ninth Edition", "9ED");
  }
}

module.exports = BogImp;
