"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RepayinKind extends Card {
  constructor(game) {
    super(game, "Repay in Kind", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = RepayinKind;
