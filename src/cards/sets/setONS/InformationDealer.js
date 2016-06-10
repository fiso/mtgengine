"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InformationDealer extends UnimplementedCard {
  constructor (game) {
    super(game, "Information Dealer", "Onslaught", "ONS");
  }
}

module.exports = InformationDealer;
