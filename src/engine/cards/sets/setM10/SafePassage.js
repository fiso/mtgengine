"use strict";
const Constants = require ("../../../Constants");
const SafePassageBase = require("../setM13/SafePassage");

class SafePassage extends SafePassageBase {
  constructor (game) {
    super(game, "Safe Passage", "Magic 2010", "M10");
  }
}

module.exports = SafePassage;
