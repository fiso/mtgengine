"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MonkRealistBase = require("../setCMD/MonkRealist.js");

class MonkRealist extends MonkRealistBase {
  constructor(game) {
    super(game, "Monk Realist", "Urza's Saga", "USG");
  }
}

module.exports = MonkRealist;
