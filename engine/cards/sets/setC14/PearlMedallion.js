"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PearlMedallion extends Card {
  constructor(game) {
    super(game, "Pearl Medallion", "Commander 2014", "C14");
  }
}

module.exports = PearlMedallion;
