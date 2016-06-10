"use strict";
const Constants = require ("../../../Constants");
const WintersNightBase = require("../setALL/WintersNight");

class WintersNight extends WintersNightBase {
  constructor (game) {
    super(game, "Winter's Night", "Masters Edition II", "ME2");
  }
}

module.exports = WintersNight;
