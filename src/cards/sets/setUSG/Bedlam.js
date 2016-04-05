"use strict";
const Constants = require ("../../../Constants");
const BedlamBase = require("../set7ED/Bedlam");

class Bedlam extends BedlamBase {
  constructor(game) {
    super(game, "Bedlam", "Urza's Saga", "USG");
  }
}

module.exports = Bedlam;
