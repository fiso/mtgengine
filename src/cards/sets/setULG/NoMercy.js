"use strict";
const Constants = require ("../../../Constants");
const NoMercyBase = require("../setMP2/NoMercy");

class NoMercy extends NoMercyBase {
  constructor (game) {
    super(game, "No Mercy", "Urza's Legacy", "ULG");
  }
}

module.exports = NoMercy;
