"use strict";
const Constants = require ("../../../Constants");
const QuirionRangerBase = require("../setPRM/QuirionRanger");

class QuirionRanger extends QuirionRangerBase {
  constructor (game) {
    super(game, "Quirion Ranger", "Friday Night Magic 2001", "F01");
  }
}

module.exports = QuirionRanger;
