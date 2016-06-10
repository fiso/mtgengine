"use strict";
const Constants = require ("../../../Constants");
const MonkRealistBase = require("../setCMD/MonkRealist");

class MonkRealist extends MonkRealistBase {
  constructor (game) {
    super(game, "Monk Realist", "Urza's Saga", "USG");
  }
}

module.exports = MonkRealist;
