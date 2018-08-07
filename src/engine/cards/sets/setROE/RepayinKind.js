"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RepayinKind extends UnimplementedCard {
  constructor (game) {
    super(game, "Repay in Kind", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = RepayinKind;
