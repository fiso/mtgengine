"use strict";
const Constants = require ("../../../Constants");
const LightofDayBase = require("../set6ED/LightofDay");

class LightofDay extends LightofDayBase {
  constructor (game) {
    super(game, "Light of Day", "Tempest", "TMP");
  }
}

module.exports = LightofDay;
