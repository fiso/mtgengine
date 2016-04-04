"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TaintedField extends UnimplementedCard {
  constructor(game) {
    super(game, "Tainted Field", "Commander 2015", "C15");
  }
}

module.exports = TaintedField;
