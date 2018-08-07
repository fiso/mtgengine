"use strict";
const Constants = require ("../../../Constants");
const QuagmireDruidBase = require("../setC13/QuagmireDruid");

class QuagmireDruid extends QuagmireDruidBase {
  constructor (game) {
    super(game, "Quagmire Druid", "Apocalypse", "APC");
  }
}

module.exports = QuagmireDruid;
