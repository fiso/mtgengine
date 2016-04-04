"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BondsofMortality extends Card {
  constructor(game) {
    super(game, "Bonds of Mortality", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = BondsofMortality;
