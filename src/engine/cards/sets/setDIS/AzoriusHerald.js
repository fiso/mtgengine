"use strict";
const Constants = require ("../../../Constants");
const AzoriusHeraldBase = require("../setC13/AzoriusHerald");

class AzoriusHerald extends AzoriusHeraldBase {
  constructor (game) {
    super(game, "Azorius Herald", "Dissension", "DIS");
  }
}

module.exports = AzoriusHerald;
