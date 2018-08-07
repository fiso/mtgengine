"use strict";
const Constants = require ("../../../Constants");
const WakeofVulturesBase = require("../setEMA/WakeofVultures");

class WakeofVultures extends WakeofVulturesBase {
  constructor (game) {
    super(game, "Wake of Vultures", "Visions", "VIS");
  }
}

module.exports = WakeofVultures;
