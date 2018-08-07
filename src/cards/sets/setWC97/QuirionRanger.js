"use strict";
const Constants = require ("../../../Constants");
const QuirionRangerBase = require("../setPRM/QuirionRanger");

class QuirionRanger extends QuirionRangerBase {
  constructor (game) {
    super(game, "Quirion Ranger", "World Championship Decks 1997", "WC97");
  }
}

module.exports = QuirionRanger;
