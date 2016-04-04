"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SunCeYoungConquererBase = require("../setME3/SunCeYoungConquerer.js");

class SunCeYoungConquerer extends SunCeYoungConquererBase {
  constructor(game) {
    super(game, "Sun Ce, Young Conquerer", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = SunCeYoungConquerer;
