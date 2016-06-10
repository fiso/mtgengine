"use strict";
const Constants = require ("../../../Constants");
const CrawGiantBase = require("../setCHR/CrawGiant");

class CrawGiant extends CrawGiantBase {
  constructor (game) {
    super(game, "Craw Giant", "Legends", "LEG");
  }
}

module.exports = CrawGiant;
