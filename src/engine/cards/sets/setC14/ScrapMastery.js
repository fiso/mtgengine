"use strict";
const Constants = require ("../../../Constants");
const ScrapMasteryBase = require("../setCM2/ScrapMastery");

class ScrapMastery extends ScrapMasteryBase {
  constructor (game) {
    super(game, "Scrap Mastery", "Commander 2014", "C14");
  }
}

module.exports = ScrapMastery;
