"use strict";
const Constants = require ("../../../Constants");
const CrawlspaceBase = require("../setC13/Crawlspace");

class Crawlspace extends CrawlspaceBase {
  constructor (game) {
    super(game, "Crawlspace", "Urza's Legacy", "ULG");
  }
}

module.exports = Crawlspace;
