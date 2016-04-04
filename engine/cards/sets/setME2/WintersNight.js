"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WintersNightBase = require("../setALL/WintersNight.js");

class WintersNight extends WintersNightBase {
  constructor(game) {
    super(game, "Winter's Night", "Masters Edition II", "ME2");
  }
}

module.exports = WintersNight;
