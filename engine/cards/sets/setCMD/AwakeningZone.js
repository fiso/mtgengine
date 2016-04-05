"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AwakeningZone extends UnimplementedCard {
  constructor(game) {
    super(game, "Awakening Zone", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = AwakeningZone;
