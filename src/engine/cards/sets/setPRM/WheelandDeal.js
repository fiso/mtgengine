"use strict";
const Constants = require ("../../../Constants");
const WheelandDealBase = require("../setONS/WheelandDeal");

class WheelandDeal extends WheelandDealBase {
  constructor (game) {
    super(game, "Wheel and Deal", "Magic Online Promos", "PRM");
  }
}

module.exports = WheelandDeal;
