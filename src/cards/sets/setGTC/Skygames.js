"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Skygames extends UnimplementedCard {
  constructor (game) {
    super(game, "Skygames", "Gatecrash", "GTC");
  }
}

module.exports = Skygames;
