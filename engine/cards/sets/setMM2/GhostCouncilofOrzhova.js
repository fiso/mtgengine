"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GhostCouncilofOrzhovaBase = require("../setGPT/GhostCouncilofOrzhova.js");

class GhostCouncilofOrzhova extends GhostCouncilofOrzhovaBase {
  constructor(game) {
    super(game, "Ghost Council of Orzhova", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = GhostCouncilofOrzhova;
