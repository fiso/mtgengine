"use strict";
const Constants = require ("../../../Constants");
const RakshasaVizierBase = require("../setKTK/RakshasaVizier");

class RakshasaVizier extends RakshasaVizierBase {
  constructor (game) {
    super(game, "Rakshasa Vizier", "Prerelease Events", "pPRE");
  }
}

module.exports = RakshasaVizier;
