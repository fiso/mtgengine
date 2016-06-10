"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TerramorphicExpanse extends UnimplementedCard {
  constructor (game) {
    super(game, "Terramorphic Expanse", "Archenemy", "ARC");
  }
}

module.exports = TerramorphicExpanse;
