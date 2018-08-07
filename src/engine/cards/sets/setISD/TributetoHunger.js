"use strict";
const Constants = require ("../../../Constants");
const TributetoHungerBase = require("../setDDQ/TributetoHunger");

class TributetoHunger extends TributetoHungerBase {
  constructor (game) {
    super(game, "Tribute to Hunger", "Innistrad", "ISD");
  }
}

module.exports = TributetoHunger;
