"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AnnexBase = require("../set9ED/Annex.js");

class Annex extends AnnexBase {
  constructor(game) {
    super(game, "Annex", "Onslaught", "ONS");
  }
}

module.exports = Annex;
