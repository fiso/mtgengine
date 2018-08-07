"use strict";
const Constants = require ("../../../Constants");
const BaneoftheLivingBase = require("../setCM2/BaneoftheLiving");

class BaneoftheLiving extends BaneoftheLivingBase {
  constructor (game) {
    super(game, "Bane of the Living", "Commander 2016", "C16");
  }
}

module.exports = BaneoftheLiving;
