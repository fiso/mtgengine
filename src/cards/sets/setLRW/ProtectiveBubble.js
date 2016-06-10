"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProtectiveBubble extends UnimplementedCard {
  constructor (game) {
    super(game, "Protective Bubble", "Lorwyn", "LRW");
  }
}

module.exports = ProtectiveBubble;
