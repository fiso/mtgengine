"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Stupor extends UnimplementedCard {
  constructor(game) {
    super(game, "Stupor", "Arena League", "pARL");
  }
}

module.exports = Stupor;
