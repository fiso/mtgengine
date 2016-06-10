"use strict";
const Constants = require ("../../../Constants");
const FeastorFamineBase = require("../setALL/FeastorFamine");

class FeastorFamine extends FeastorFamineBase {
  constructor (game) {
    super(game, "Feast or Famine", "Masters Edition", "MED");
  }
}

module.exports = FeastorFamine;
