"use strict";
const Constants = require ("../../../Constants");
const RowenBase = require("../set6ED/Rowen");

class Rowen extends RowenBase {
  constructor(game) {
    super(game, "Rowen", "Seventh Edition", "7ED");
  }
}

module.exports = Rowen;
