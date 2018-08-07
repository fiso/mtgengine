"use strict";
const Constants = require ("../../../Constants");
const KrosanCloudscraperBase = require("../setTSB/KrosanCloudscraper");

class KrosanCloudscraper extends KrosanCloudscraperBase {
  constructor (game) {
    super(game, "Krosan Cloudscraper", "Legions", "LGN");
  }
}

module.exports = KrosanCloudscraper;
