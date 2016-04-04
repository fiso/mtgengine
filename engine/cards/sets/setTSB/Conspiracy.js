"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ConspiracyBase = require("../setMMQ/Conspiracy.js");

class Conspiracy extends ConspiracyBase {
  constructor(game) {
    super(game, "Conspiracy", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = Conspiracy;
