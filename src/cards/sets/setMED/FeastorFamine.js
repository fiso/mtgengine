"use strict";
const Constants = require ("../../../Constants");
const FeastorFamineBase = require("../setDDJ/FeastorFamine");

class FeastorFamine extends FeastorFamineBase {
  constructor (game) {
    super(game, "Feast or Famine", "Masters Edition", "MED");
  }
}

module.exports = FeastorFamine;
