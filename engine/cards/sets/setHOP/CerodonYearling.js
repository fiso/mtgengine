"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CerodonYearlingBase = require("../setARB/CerodonYearling.js");

class CerodonYearling extends CerodonYearlingBase {
  constructor(game) {
    super(game, "Cerodon Yearling", "Planechase", "HOP");
  }
}

module.exports = CerodonYearling;
