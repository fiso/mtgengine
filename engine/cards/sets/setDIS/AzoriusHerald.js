"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AzoriusHeraldBase = require("../setC13/AzoriusHerald.js");

class AzoriusHerald extends AzoriusHeraldBase {
  constructor(game) {
    super(game, "Azorius Herald", "Dissension", "DIS");
  }
}

module.exports = AzoriusHerald;
