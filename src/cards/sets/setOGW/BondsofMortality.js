"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BondsofMortality extends UnimplementedCard {
  constructor (game) {
    super(game, "Bonds of Mortality", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = BondsofMortality;
