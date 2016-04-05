"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarChariot extends UnimplementedCard {
  constructor(game) {
    super(game, "War Chariot", "Ice Age", "ICE");
  }
}

module.exports = WarChariot;
