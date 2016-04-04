"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LordoftheVoid extends UnimplementedCard {
  constructor(game) {
    super(game, "Lord of the Void", "Gatecrash", "GTC");
  }
}

module.exports = LordoftheVoid;
