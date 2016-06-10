"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Soulshriek extends UnimplementedCard {
  constructor (game) {
    super(game, "Soulshriek", "Mirage", "MIR");
  }
}

module.exports = Soulshriek;
