"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FateTransfer extends UnimplementedCard {
  constructor (game) {
    super(game, "Fate Transfer", "Shadowmoor", "SHM");
  }
}

module.exports = FateTransfer;
