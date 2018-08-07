"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TaintedField extends UnimplementedCard {
  constructor (game) {
    super(game, "Tainted Field", "Explorers of Ixalan", "E02");
  }
}

module.exports = TaintedField;
