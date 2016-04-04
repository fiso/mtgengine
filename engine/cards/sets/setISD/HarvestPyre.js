"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HarvestPyre extends Card {
  constructor(game) {
    super(game, "Harvest Pyre", "Innistrad", "ISD");
  }
}

module.exports = HarvestPyre;
