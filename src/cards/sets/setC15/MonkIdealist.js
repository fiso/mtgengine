"use strict";
const Constants = require ("../../../Constants");
const MonkIdealistBase = require("../setEMA/MonkIdealist");

class MonkIdealist extends MonkIdealistBase {
  constructor (game) {
    super(game, "Monk Idealist", "Commander 2015", "C15");
  }
}

module.exports = MonkIdealist;
