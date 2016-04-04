"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PearlMedallion extends UnimplementedCard {
  constructor(game) {
    super(game, "Pearl Medallion", "Commander 2014", "C14");
  }
}

module.exports = PearlMedallion;
