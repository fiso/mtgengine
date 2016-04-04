"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RagingKavuBase = require("../setINV/RagingKavu.js");

class RagingKavu extends RagingKavuBase {
  constructor(game) {
    super(game, "Raging Kavu", "Prerelease Events", "pPRE");
  }
}

module.exports = RagingKavu;
