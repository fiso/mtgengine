"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IronTuskElephant extends UnimplementedCard {
  constructor (game) {
    super(game, "Iron Tusk Elephant", "Mirage", "MIR");
  }
}

module.exports = IronTuskElephant;
