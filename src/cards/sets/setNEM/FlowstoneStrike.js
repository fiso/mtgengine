"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlowstoneStrike extends UnimplementedCard {
  constructor (game) {
    super(game, "Flowstone Strike", "Nemesis", "NEM");
  }
}

module.exports = FlowstoneStrike;
