"use strict";
const Constants = require ("../../../Constants");
const TatyovaBenthicDruidBase = require("../setDOM/TatyovaBenthicDruid");

class TatyovaBenthicDruid extends TatyovaBenthicDruidBase {
  constructor (game) {
    super(game, "Tatyova, Benthic Druid", "Dominaria Promos", "PDOM");
  }
}

module.exports = TatyovaBenthicDruid;
