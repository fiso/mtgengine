"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AzureMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Azure Mage", "Commander 2014", "C14");
  }
}

module.exports = AzureMage;
