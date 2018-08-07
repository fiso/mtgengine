"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SapphireMedallion extends UnimplementedCard {
  constructor (game) {
    super(game, "Sapphire Medallion", "Commander 2014", "C14");
  }
}

module.exports = SapphireMedallion;
