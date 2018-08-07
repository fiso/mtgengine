"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DaruWarchief extends UnimplementedCard {
  constructor (game) {
    super(game, "Daru Warchief", "Scourge", "SCG");
  }
}

module.exports = DaruWarchief;
