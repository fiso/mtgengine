"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CalciteSnapper extends UnimplementedCard {
  constructor(game) {
    super(game, "Calcite Snapper", "Worldwake", "WWK");
  }
}

module.exports = CalciteSnapper;
