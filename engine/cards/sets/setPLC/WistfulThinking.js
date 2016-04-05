"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WistfulThinking extends UnimplementedCard {
  constructor(game) {
    super(game, "Wistful Thinking", "Planar Chaos", "PLC");
  }
}

module.exports = WistfulThinking;
