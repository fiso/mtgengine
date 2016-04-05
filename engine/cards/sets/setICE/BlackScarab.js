"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlackScarab extends UnimplementedCard {
  constructor(game) {
    super(game, "Black Scarab", "Ice Age", "ICE");
  }
}

module.exports = BlackScarab;
