"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FieldofRuin extends UnimplementedCard {
  constructor (game) {
    super(game, "Field of Ruin", "Ixalan", "XLN");
  }
}

module.exports = FieldofRuin;
