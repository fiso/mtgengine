"use strict";
const Constants = require ("../../../Constants");
const PrizedUnicornBase = require("../setORI/PrizedUnicorn");

class PrizedUnicorn extends PrizedUnicornBase {
  constructor (game) {
    super(game, "Prized Unicorn", "Magic 2011", "M11");
  }
}

module.exports = PrizedUnicorn;
