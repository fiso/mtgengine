"use strict";
const Constants = require ("../../../Constants");
const LightofDayBase = require("../setWC00/LightofDay");

class LightofDay extends LightofDayBase {
  constructor (game) {
    super(game, "Light of Day", "Classic Sixth Edition", "6ED");
  }
}

module.exports = LightofDay;
