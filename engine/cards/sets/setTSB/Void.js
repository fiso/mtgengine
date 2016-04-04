"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VoidBase = require("../setINV/Void.js");

class Void extends VoidBase {
  constructor(game) {
    super(game, "Void", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = Void;
