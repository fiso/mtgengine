"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AzoriusSignetBase = require("../setARC/AzoriusSignet.js");

class AzoriusSignet extends AzoriusSignetBase {
  constructor(game) {
    super(game, "Azorius Signet", "Dissension", "DIS");
  }
}

module.exports = AzoriusSignet;
