"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TurntoMist extends UnimplementedCard {
  constructor(game) {
    super(game, "Turn to Mist", "Shadowmoor", "SHM");
  }
}

module.exports = TurntoMist;
