"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dismiss extends UnimplementedCard {
  constructor(game) {
    super(game, "Dismiss", "Arena League", "pARL");
  }
}

module.exports = Dismiss;
