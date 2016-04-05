"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RedScarab extends UnimplementedCard {
  constructor(game) {
    super(game, "Red Scarab", "Ice Age", "ICE");
  }
}

module.exports = RedScarab;
