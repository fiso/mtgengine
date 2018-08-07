"use strict";
const Constants = require ("../../../Constants");
const NaturalOrderBase = require("../setEMA/NaturalOrder");

class NaturalOrder extends NaturalOrderBase {
  constructor (game) {
    super(game, "Natural Order", "Judge Gift Cards 2010", "G10");
  }
}

module.exports = NaturalOrder;
