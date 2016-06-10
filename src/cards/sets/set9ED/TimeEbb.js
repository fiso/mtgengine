"use strict";
const Constants = require ("../../../Constants");
const TimeEbbBase = require("../setM14/TimeEbb");

class TimeEbb extends TimeEbbBase {
  constructor (game) {
    super(game, "Time Ebb", "Ninth Edition", "9ED");
  }
}

module.exports = TimeEbb;
