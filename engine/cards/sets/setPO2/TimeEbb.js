"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TimeEbbBase = require("../setM14/TimeEbb.js");

class TimeEbb extends TimeEbbBase {
  constructor(game) {
    super(game, "Time Ebb", "Portal Second Age", "PO2");
  }
}

module.exports = TimeEbb;
