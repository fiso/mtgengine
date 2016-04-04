"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AnafenzatheForemostBase = require("../setKTK/AnafenzatheForemost.js");

class AnafenzatheForemost extends AnafenzatheForemostBase {
  constructor(game) {
    super(game, "Anafenza, the Foremost", "Prerelease Events", "pPRE");
  }
}

module.exports = AnafenzatheForemost;
