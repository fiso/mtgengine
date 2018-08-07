"use strict";
const Constants = require ("../../../Constants");
const CerodonYearlingBase = require("../setHOP/CerodonYearling");

class CerodonYearling extends CerodonYearlingBase {
  constructor (game) {
    super(game, "Cerodon Yearling", "Alara Reborn", "ARB");
  }
}

module.exports = CerodonYearling;
