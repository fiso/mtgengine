"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KrosanCloudscraperBase = require("../setLGN/KrosanCloudscraper.js");

class KrosanCloudscraper extends KrosanCloudscraperBase {
  constructor(game) {
    super(game, "Krosan Cloudscraper", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = KrosanCloudscraper;
