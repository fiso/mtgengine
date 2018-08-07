"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DivisionTable extends UnimplementedCard {
  constructor (game) {
    super(game, "Division Table", "Unstable", "UST");
  }
}

module.exports = DivisionTable;
