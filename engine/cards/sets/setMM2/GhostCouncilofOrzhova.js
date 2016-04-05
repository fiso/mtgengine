"use strict";
const Constants = require ("../../../Constants");
const GhostCouncilofOrzhovaBase = require("../setGPT/GhostCouncilofOrzhova");

class GhostCouncilofOrzhova extends GhostCouncilofOrzhovaBase {
  constructor(game) {
    super(game, "Ghost Council of Orzhova", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = GhostCouncilofOrzhova;
