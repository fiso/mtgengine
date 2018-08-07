"use strict";
const Constants = require ("../../../Constants");
const WoodlandCemeteryBase = require("../setDOM/WoodlandCemetery");

class WoodlandCemetery extends WoodlandCemeteryBase {
  constructor (game) {
    super(game, "Woodland Cemetery", "Innistrad", "ISD");
  }
}

module.exports = WoodlandCemetery;
