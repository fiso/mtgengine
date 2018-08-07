"use strict";
const Constants = require ("../../../Constants");
const SylvanYetiBase = require("../setS99/SylvanYeti");

class SylvanYeti extends SylvanYetiBase {
  constructor (game) {
    super(game, "Sylvan Yeti", "Portal Second Age", "P02");
  }
}

module.exports = SylvanYeti;
