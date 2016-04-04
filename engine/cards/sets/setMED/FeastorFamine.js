"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FeastorFamineBase = require("../setALL/FeastorFamine.js");

class FeastorFamine extends FeastorFamineBase {
  constructor(game) {
    super(game, "Feast or Famine", "Masters Edition", "MED");
  }
}

module.exports = FeastorFamine;
