"use strict";
const Constants = require ("../../../Constants");
const WintersNightBase = require("../setME2/WintersNight");

class WintersNight extends WintersNightBase {
  constructor (game) {
    super(game, "Winter's Night", "Alliances", "ALL");
  }
}

module.exports = WintersNight;
