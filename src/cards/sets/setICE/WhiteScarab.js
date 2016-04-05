"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhiteScarab extends UnimplementedCard {
  constructor(game) {
    super(game, "White Scarab", "Ice Age", "ICE");
  }
}

module.exports = WhiteScarab;
