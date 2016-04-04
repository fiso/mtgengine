"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TaintedField extends Card {
  constructor(game) {
    super(game, "Tainted Field", "Commander 2015", "C15");
  }
}

module.exports = TaintedField;
