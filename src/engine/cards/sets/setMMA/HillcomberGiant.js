"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HillcomberGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Hillcomber Giant", "Modern Masters", "MMA");
  }
}

module.exports = HillcomberGiant;
