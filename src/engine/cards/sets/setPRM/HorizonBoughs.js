"use strict";
const Constants = require ("../../../Constants");
const HorizonBoughsBase = require("../setPCA/HorizonBoughs");

class HorizonBoughs extends HorizonBoughsBase {
  constructor (game) {
    super(game, "Horizon Boughs", "Magic Online Promos", "PRM");
  }
}

module.exports = HorizonBoughs;
