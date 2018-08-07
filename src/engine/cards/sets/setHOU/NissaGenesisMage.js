"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NissaGenesisMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Nissa, Genesis Mage", "Hour of Devastation", "HOU");
  }
}

module.exports = NissaGenesisMage;
