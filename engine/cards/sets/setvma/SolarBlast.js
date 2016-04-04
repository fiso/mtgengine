"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SolarBlastBase = require("../setONS/SolarBlast.js");

class SolarBlast extends SolarBlastBase {
  constructor(game) {
    super(game, "Solar Blast", "Vintage Masters", "VMA");
  }
}

module.exports = SolarBlast;
