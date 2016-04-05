"use strict";
const Constants = require ("../../../Constants");
const AzureMageBase = require("../setC14/AzureMage");

class AzureMage extends AzureMageBase {
  constructor(game) {
    super(game, "Azure Mage", "Magic 2012", "M12");
  }
}

module.exports = AzureMage;
