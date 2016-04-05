"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IcyPrison extends UnimplementedCard {
  constructor(game) {
    super(game, "Icy Prison", "Ice Age", "ICE");
  }
}

module.exports = IcyPrison;
