"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinMarshal extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Marshal", "Urza's Destiny", "UDS");
  }
}

module.exports = GoblinMarshal;
