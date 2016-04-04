"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarvestPyre extends UnimplementedCard {
  constructor(game) {
    super(game, "Harvest Pyre", "Innistrad", "ISD");
  }
}

module.exports = HarvestPyre;
