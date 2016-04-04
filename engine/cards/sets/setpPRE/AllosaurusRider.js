"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AllosaurusRiderBase = require("../setCSP/AllosaurusRider.js");

class AllosaurusRider extends AllosaurusRiderBase {
  constructor(game) {
    super(game, "Allosaurus Rider", "Prerelease Events", "pPRE");
  }
}

module.exports = AllosaurusRider;
