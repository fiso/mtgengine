"use strict";
const Constants = require ("../../../Constants");
const RecklessScholarBase = require("../setCNS/RecklessScholar");

class RecklessScholar extends RecklessScholarBase {
  constructor(game) {
    super(game, "Reckless Scholar", "Shadows over Innistrad", "SOI");
  }
}

module.exports = RecklessScholar;
