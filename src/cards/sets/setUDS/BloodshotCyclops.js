"use strict";
const Constants = require ("../../../Constants");
const BloodshotCyclopsBase = require("../set8ED/BloodshotCyclops");

class BloodshotCyclops extends BloodshotCyclopsBase {
  constructor (game) {
    super(game, "Bloodshot Cyclops", "Urza's Destiny", "UDS");
  }
}

module.exports = BloodshotCyclops;
