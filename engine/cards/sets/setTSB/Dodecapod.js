"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DodecapodBase = require("../setAPC/Dodecapod.js");

class Dodecapod extends DodecapodBase {
  constructor(game) {
    super(game, "Dodecapod", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = Dodecapod;
