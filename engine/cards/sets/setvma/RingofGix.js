"use strict";
const Constants = require ("../../../Constants");
const RingofGixBase = require("../setULG/RingofGix");

class RingofGix extends RingofGixBase {
  constructor(game) {
    super(game, "Ring of Gix", "Vintage Masters", "VMA");
  }
}

module.exports = RingofGix;
