"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MassMutinyBase = require("../setC13/MassMutiny.js");

class MassMutiny extends MassMutinyBase {
  constructor(game) {
    super(game, "Mass Mutiny", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = MassMutiny;
