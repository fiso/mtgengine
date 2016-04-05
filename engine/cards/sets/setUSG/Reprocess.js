"use strict";
const Constants = require ("../../../Constants");
const ReprocessBase = require("../set7ED/Reprocess");

class Reprocess extends ReprocessBase {
  constructor(game) {
    super(game, "Reprocess", "Urza's Saga", "USG");
  }
}

module.exports = Reprocess;
