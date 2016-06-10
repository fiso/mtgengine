"use strict";
const Constants = require ("../../../Constants");
const TelethopterBase = require("../setTMP/Telethopter");

class Telethopter extends TelethopterBase {
  constructor (game) {
    super(game, "Telethopter", "Tempest Remastered", "TPR");
  }
}

module.exports = Telethopter;
