"use strict";
const Constants = require ("../../../Constants");
const MonkIdealistBase = require("../setEMA/MonkIdealist");

class MonkIdealist extends MonkIdealistBase {
  constructor (game) {
    super(game, "Monk Idealist", "Urza's Saga", "USG");
  }
}

module.exports = MonkIdealist;
