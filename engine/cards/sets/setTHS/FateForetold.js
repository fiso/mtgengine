"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FateForetold extends UnimplementedCard {
  constructor(game) {
    super(game, "Fate Foretold", "Theros", "THS");
  }
}

module.exports = FateForetold;
