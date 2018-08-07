"use strict";
const Constants = require ("../../../Constants");
const GreaterBasiliskBase = require("../setIMA/GreaterBasilisk");

class GreaterBasilisk extends GreaterBasiliskBase {
  constructor (game) {
    super(game, "Greater Basilisk", "Magic 2011", "M11");
  }
}

module.exports = GreaterBasilisk;
