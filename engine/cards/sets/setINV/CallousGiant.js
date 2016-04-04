"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CallousGiant extends UnimplementedCard {
  constructor(game) {
    super(game, "Callous Giant", "Invasion", "INV");
  }
}

module.exports = CallousGiant;
