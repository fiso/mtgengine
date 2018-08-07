"use strict";
const Constants = require ("../../../Constants");
const CrawGiantBase = require("../setTSB/CrawGiant");

class CrawGiant extends CrawGiantBase {
  constructor (game) {
    super(game, "Craw Giant", "Chronicles", "CHR");
  }
}

module.exports = CrawGiant;
