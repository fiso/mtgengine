"use strict";
const Constants = require ("../../../Constants");
const ThoughtScourBase = require("../setIMA/ThoughtScour");

class ThoughtScour extends ThoughtScourBase {
  constructor (game) {
    super(game, "Thought Scour", "Dark Ascension", "DKA");
  }
}

module.exports = ThoughtScour;
