"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InformationDealer extends Card {
  constructor(game) {
    super(game, "Information Dealer", "Onslaught", "ONS");
  }
}

module.exports = InformationDealer;
