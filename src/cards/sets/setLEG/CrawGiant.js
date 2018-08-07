"use strict";
const Constants = require ("../../../Constants");
const CrawGiantBase = require("../setTSB/CrawGiant");

class CrawGiant extends CrawGiantBase {
  constructor (game) {
    super(game, "Craw Giant", "Legends", "LEG");
  }
}

module.exports = CrawGiant;
