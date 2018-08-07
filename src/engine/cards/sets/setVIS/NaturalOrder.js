"use strict";
const Constants = require ("../../../Constants");
const NaturalOrderBase = require("../setEMA/NaturalOrder");

class NaturalOrder extends NaturalOrderBase {
  constructor (game) {
    super(game, "Natural Order", "Visions", "VIS");
  }
}

module.exports = NaturalOrder;
