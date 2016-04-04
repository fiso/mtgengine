"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StormbindBase = require("../setICE/Stormbind.js");

class Stormbind extends StormbindBase {
  constructor(game) {
    super(game, "Stormbind", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = Stormbind;
