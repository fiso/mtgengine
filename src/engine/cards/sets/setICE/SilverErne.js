"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilverErne extends UnimplementedCard {
  constructor (game) {
    super(game, "Silver Erne", "Ice Age", "ICE");
  }
}

module.exports = SilverErne;
