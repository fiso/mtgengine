"use strict";
const Constants = require ("../../../Constants");
const KhorvathBrightflameBase = require("../setPBBD/KhorvathBrightflame");

class KhorvathBrightflame extends KhorvathBrightflameBase {
  constructor (game) {
    super(game, "Khorvath Brightflame", "Battlebond", "BBD");
  }
}

module.exports = KhorvathBrightflame;
