"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LightofDayBase = require("../set6ED/LightofDay.js");

class LightofDay extends LightofDayBase {
  constructor(game) {
    super(game, "Light of Day", "Tempest", "TMP");
  }
}

module.exports = LightofDay;
