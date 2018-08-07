"use strict";
const Constants = require ("../../../Constants");
const LeoninRelicWarderBase = require("../setC17/LeoninRelicWarder");

class LeoninRelicWarder extends LeoninRelicWarderBase {
  constructor (game) {
    super(game, "Leonin Relic-Warder", "Mirrodin Besieged", "MBS");
  }
}

module.exports = LeoninRelicWarder;
