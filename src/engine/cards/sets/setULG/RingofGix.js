"use strict";
const Constants = require ("../../../Constants");
const RingofGixBase = require("../setVMA/RingofGix");

class RingofGix extends RingofGixBase {
  constructor (game) {
    super(game, "Ring of Gix", "Urza's Legacy", "ULG");
  }
}

module.exports = RingofGix;
