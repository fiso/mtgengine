"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SindbadBase = require("../setARN/Sindbad.js");

class Sindbad extends SindbadBase {
  constructor(game) {
    super(game, "Sindbad", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = Sindbad;
