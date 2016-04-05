"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wiitigo extends UnimplementedCard {
  constructor(game) {
    super(game, "Wiitigo", "Ice Age", "ICE");
  }
}

module.exports = Wiitigo;
