"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SafePassageBase = require("../setDDI/SafePassage.js");

class SafePassage extends SafePassageBase {
  constructor(game) {
    super(game, "Safe Passage", "Magic 2011", "M11");
  }
}

module.exports = SafePassage;
