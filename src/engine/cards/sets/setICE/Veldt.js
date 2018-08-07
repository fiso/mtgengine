"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Veldt extends UnimplementedCard {
  constructor (game) {
    super(game, "Veldt", "Ice Age", "ICE");
  }
}

module.exports = Veldt;
