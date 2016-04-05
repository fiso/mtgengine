"use strict";
const Constants = require ("../../../Constants");
const CrawGiantBase = require("../setCHR/CrawGiant");

class CrawGiant extends CrawGiantBase {
  constructor(game) {
    super(game, "Craw Giant", "Fifth Edition", "5ED");
  }
}

module.exports = CrawGiant;
