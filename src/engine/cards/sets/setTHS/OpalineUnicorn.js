"use strict";
const Constants = require ("../../../Constants");
const OpalineUnicornBase = require("../setCN2/OpalineUnicorn");

class OpalineUnicorn extends OpalineUnicornBase {
  constructor (game) {
    super(game, "Opaline Unicorn", "Theros", "THS");
  }
}

module.exports = OpalineUnicorn;
