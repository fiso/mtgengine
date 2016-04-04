"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RingofGixBase = require("../setULG/RingofGix.js");

class RingofGix extends RingofGixBase {
  constructor(game) {
    super(game, "Ring of Gix", "Vintage Masters", "VMA");
  }
}

module.exports = RingofGix;
