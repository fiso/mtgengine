"use strict";
const Constants = require ("../../../Constants");
const AzureMageBase = require("../setMM3/AzureMage");

class AzureMage extends AzureMageBase {
  constructor (game) {
    super(game, "Azure Mage", "Magic 2012", "M12");
  }
}

module.exports = AzureMage;
