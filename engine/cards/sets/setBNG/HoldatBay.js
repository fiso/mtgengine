"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HoldatBay extends UnimplementedCard {
  constructor(game) {
    super(game, "Hold at Bay", "Born of the Gods", "BNG");
  }
}

module.exports = HoldatBay;
