"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SunkenHopeBase = require("../setPC2/SunkenHope.js");

class SunkenHope extends SunkenHopeBase {
  constructor(game) {
    super(game, "Sunken Hope", "Planeshift", "PLS");
  }
}

module.exports = SunkenHope;
