"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Anarchy extends UnimplementedCard {
  constructor(game) {
    super(game, "Anarchy", "Ice Age", "ICE");
  }
}

module.exports = Anarchy;
