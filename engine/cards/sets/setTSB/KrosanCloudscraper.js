"use strict";
const Constants = require ("../../../Constants");
const KrosanCloudscraperBase = require("../setLGN/KrosanCloudscraper");

class KrosanCloudscraper extends KrosanCloudscraperBase {
  constructor(game) {
    super(game, "Krosan Cloudscraper", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = KrosanCloudscraper;
