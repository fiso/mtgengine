"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TempestCaller extends UnimplementedCard {
  constructor (game) {
    super(game, "Tempest Caller", "Ixalan", "XLN");
  }
}

module.exports = TempestCaller;
