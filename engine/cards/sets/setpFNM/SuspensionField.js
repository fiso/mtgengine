"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SuspensionField extends Card {
  constructor(game) {
    super(game, "Suspension Field", "Friday Night Magic", "pFNM");
  }
}

module.exports = SuspensionField;
