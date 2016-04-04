"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmeraldMedallion extends UnimplementedCard {
  constructor(game) {
    super(game, "Emerald Medallion", "Commander 2014", "C14");
  }
}

module.exports = EmeraldMedallion;
