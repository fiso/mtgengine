"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AzureMage extends Card {
  constructor(game) {
    super(game, "Azure Mage", "Commander 2014", "C14");
  }
}

module.exports = AzureMage;
