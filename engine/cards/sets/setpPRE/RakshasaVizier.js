"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RakshasaVizierBase = require("../setKTK/RakshasaVizier.js");

class RakshasaVizier extends RakshasaVizierBase {
  constructor(game) {
    super(game, "Rakshasa Vizier", "Prerelease Events", "pPRE");
  }
}

module.exports = RakshasaVizier;
