"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RunAground extends UnimplementedCard {
  constructor (game) {
    super(game, "Run Aground", "Ixalan", "XLN");
  }
}

module.exports = RunAground;
