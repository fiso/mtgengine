"use strict";
const Constants = require ("../../../Constants");
const SylvanYetiBase = require("../setPO2/SylvanYeti");

class SylvanYeti extends SylvanYetiBase {
  constructor (game) {
    super(game, "Sylvan Yeti", "Starter 1999", "S99");
  }
}

module.exports = SylvanYeti;
