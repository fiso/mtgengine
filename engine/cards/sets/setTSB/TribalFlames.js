"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TribalFlamesBase = require("../setDDE/TribalFlames.js");

class TribalFlames extends TribalFlamesBase {
  constructor(game) {
    super(game, "Tribal Flames", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = TribalFlames;
