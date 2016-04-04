"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TributetoHungerBase = require("../setDDQ/TributetoHunger.js");

class TributetoHunger extends TributetoHungerBase {
  constructor(game) {
    super(game, "Tribute to Hunger", "Innistrad", "ISD");
  }
}

module.exports = TributetoHunger;
