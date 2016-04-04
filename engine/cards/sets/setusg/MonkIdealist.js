"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MonkIdealistBase = require("../setC15/MonkIdealist.js");

class MonkIdealist extends MonkIdealistBase {
  constructor(game) {
    super(game, "Monk Idealist", "Urza's Saga", "USG");
  }
}

module.exports = MonkIdealist;
