"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UncleIstvanBase = require("../set4ED/UncleIstvan.js");

class UncleIstvan extends UncleIstvanBase {
  constructor(game) {
    super(game, "Uncle Istvan", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = UncleIstvan;
