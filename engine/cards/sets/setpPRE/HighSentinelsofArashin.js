"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HighSentinelsofArashinBase = require("../setKTK/HighSentinelsofArashin.js");

class HighSentinelsofArashin extends HighSentinelsofArashinBase {
  constructor(game) {
    super(game, "High Sentinels of Arashin", "Prerelease Events", "pPRE");
  }
}

module.exports = HighSentinelsofArashin;
