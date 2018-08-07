"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AzureMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Azure Mage", "Modern Masters 2017", "MM3");
  }
}

module.exports = AzureMage;
