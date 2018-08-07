"use strict";
const Constants = require ("../../../Constants");
const YevasForcemageBase = require("../setORI/YevasForcemage");

class YevasForcemage extends YevasForcemageBase {
  constructor (game) {
    super(game, "Yeva's Forcemage", "Magic 2013", "M13");
  }
}

module.exports = YevasForcemage;
