"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ashnod extends UnimplementedCard {
  constructor (game) {
    super(game, "Ashnod", "Vanguard", "VAN");
  }
}

module.exports = Ashnod;
