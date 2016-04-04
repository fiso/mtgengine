"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AzureMageBase = require("../setC14/AzureMage.js");

class AzureMage extends AzureMageBase {
  constructor(game) {
    super(game, "Azure Mage", "Magic 2012", "M12");
  }
}

module.exports = AzureMage;
