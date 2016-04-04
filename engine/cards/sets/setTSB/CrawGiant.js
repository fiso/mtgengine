"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrawGiantBase = require("../setCHR/CrawGiant.js");

class CrawGiant extends CrawGiantBase {
  constructor(game) {
    super(game, "Craw Giant", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = CrawGiant;
