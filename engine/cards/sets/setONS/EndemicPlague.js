"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EndemicPlague extends UnimplementedCard {
  constructor(game) {
    super(game, "Endemic Plague", "Onslaught", "ONS");
  }
}

module.exports = EndemicPlague;
