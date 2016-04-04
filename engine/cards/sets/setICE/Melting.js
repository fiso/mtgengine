"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Melting extends UnimplementedCard {
  constructor(game) {
    super(game, "Melting", "Ice Age", "ICE");
  }
}

module.exports = Melting;
