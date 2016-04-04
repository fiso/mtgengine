"use strict";
const Constants = require ("../../../Constants");
const CerodonYearlingBase = require("../setARB/CerodonYearling");

class CerodonYearling extends CerodonYearlingBase {
  constructor(game) {
    super(game, "Cerodon Yearling", "Planechase", "HOP");
  }
}

module.exports = CerodonYearling;
