"use strict";
const Constants = require ("../../../Constants");
const PerilousResearchBase = require("../setMMA/PerilousResearch");

class PerilousResearch extends PerilousResearchBase {
  constructor (game) {
    super(game, "Perilous Research", "Coldsnap", "CSP");
  }
}

module.exports = PerilousResearch;
