"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AshestoAshesBase = require("../set5ED/AshestoAshes.js");

class AshestoAshes extends AshestoAshesBase {
  constructor(game) {
    super(game, "Ashes to Ashes", "Fourth Edition", "4ED");
  }
}

module.exports = AshestoAshes;
