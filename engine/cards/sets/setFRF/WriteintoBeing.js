"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WriteintoBeing extends UnimplementedCard {
  constructor(game) {
    super(game, "Write into Being", "Fate Reforged", "FRF");
  }
}

module.exports = WriteintoBeing;
