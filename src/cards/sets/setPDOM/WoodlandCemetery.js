"use strict";
const Constants = require ("../../../Constants");
const WoodlandCemeteryBase = require("../setDOM/WoodlandCemetery");

class WoodlandCemetery extends WoodlandCemeteryBase {
  constructor (game) {
    super(game, "Woodland Cemetery", "Dominaria Promos", "PDOM");
  }
}

module.exports = WoodlandCemetery;
