"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Deathlace extends Card {
  constructor(game) {
    super(game, "Deathlace", "Collector's Edition", "CED");
  }
}

module.exports = Deathlace;
