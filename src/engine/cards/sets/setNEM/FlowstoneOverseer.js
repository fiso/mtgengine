"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlowstoneOverseer extends UnimplementedCard {
  constructor (game) {
    super(game, "Flowstone Overseer", "Nemesis", "NEM");
  }
}

module.exports = FlowstoneOverseer;
