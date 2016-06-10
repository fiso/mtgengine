"use strict";
const Constants = require ("../../../Constants");
const SafePassageBase = require("../setDDI/SafePassage");

class SafePassage extends SafePassageBase {
  constructor (game) {
    super(game, "Safe Passage", "Magic 2013", "M13");
  }
}

module.exports = SafePassage;
