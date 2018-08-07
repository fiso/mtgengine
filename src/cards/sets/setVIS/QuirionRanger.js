"use strict";
const Constants = require ("../../../Constants");
const QuirionRangerBase = require("../setPRM/QuirionRanger");

class QuirionRanger extends QuirionRangerBase {
  constructor (game) {
    super(game, "Quirion Ranger", "Visions", "VIS");
  }
}

module.exports = QuirionRanger;
