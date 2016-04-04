"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SinkingFeeling extends UnimplementedCard {
  constructor(game) {
    super(game, "Sinking Feeling", "Shadowmoor", "SHM");
  }
}

module.exports = SinkingFeeling;
