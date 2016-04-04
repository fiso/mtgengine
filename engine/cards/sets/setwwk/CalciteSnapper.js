"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CalciteSnapper extends Card {
  constructor(game) {
    super(game, "Calcite Snapper", "Worldwake", "WWK");
  }
}

module.exports = CalciteSnapper;
