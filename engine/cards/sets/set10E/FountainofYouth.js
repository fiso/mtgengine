"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FountainofYouthBase = require("../setCHR/FountainofYouth.js");

class FountainofYouth extends FountainofYouthBase {
  constructor(game) {
    super(game, "Fountain of Youth", "Tenth Edition", "10E");
  }
}

module.exports = FountainofYouth;
