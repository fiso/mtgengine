"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ResetBase = require("../setLEG/Reset.js");

class Reset extends ResetBase {
  constructor(game) {
    super(game, "Reset", "Masters Edition III", "ME3");
  }
}

module.exports = Reset;
